import React from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const SearchComponent = ({
  isSearchOpen,
  setIsSearchOpen,
  searchQuery,
  setSearchQuery,
  clearSearch,
}) => {
  // Dummy search data
  const dummyProducts = [
    {
      id: 1,
      name: "Organic Wheat Seeds",
      category: "Seeds & Crops",
      path: "/marketplace/seeds-crops/wheat",
      price: "₹1,080",
      rating: 4.5,
    },
    {
      id: 2,
      name: "NPK Fertilizer",
      category: "Fertilizers & Pesticides",
      path: "/marketplace/fertilizers-pesticides/npk",
      price: "₹2,080",
      rating: 4.2,
    },
    {
      id: 3,
      name: "Drip Irrigation Kit",
      category: "Farming Equipment",
      path: "/marketplace/equipment/drip-irrigation",
      price: "₹7,500",
      rating: 4.8,
    },
    {
      id: 4,
      name: "Government Subsidy Guide",
      category: "Resources",
      path: "/resources/guides/subsidy",
      price: "Free",
      rating: 4.7,
    },
    {
      id: 5,
      name: "Agricultural Loan Application",
      category: "Financial Services",
      path: "/financial-services/apply-loan",
      price: "Service",
      rating: 4.3,
    },
    {
      id: 6,
      name: "Tomato Seeds",
      category: "Seeds & Crops",
      path: "/marketplace/seeds-crops/tomato",
      price: "₹750",
      rating: 4.6,
    },
    {
      id: 7,
      name: "Organic Pesticide",
      category: "Fertilizers & Pesticides",
      path: "/marketplace/fertilizers-pesticides/organic-pesticide",
      price: "₹1,600",
      rating: 4.4,
    },
    {
      id: 8,
      name: "Tractor Attachment",
      category: "Farming Equipment",
      path: "/marketplace/equipment/tractor-attachment",
      price: "₹20,800",
      rating: 4.9,
    },
    {
      id: 9,
      name: "Soil Testing Kit",
      category: "Farming Equipment",
      path: "/marketplace/equipment/soil-testing",
      price: "₹2,900",
      rating: 4.1,
    },
    {
      id: 10,
      name: "Crop Insurance Plan",
      category: "Financial Services",
      path: "/financial-services/insurance",
      price: "Varies",
      rating: 4.0,
    },
  ];

  // Filter dummy data based on search query
  const searchResults = searchQuery.trim()
    ? dummyProducts.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Search happens automatically via the filtered results
  };

  return (
    <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-green-700 ">
            Search Agri-Nexus
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="relative flex ">
            <Input
              type="text"
              placeholder="Search for products, services, resources..."
              className="pl-10 pr-4 py-2 w-full border-green-300 focus-visible:ring-green-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FiSearch className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-3 top-3 h-5 w-5 text-gray-400 hover:text-gray-600"
              >
                <FiX />
              </button>
            )}
          </div>

          <Button
            type="submit"
            className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors duration-200 cursor-pointer"
          >
            <FiSearch className="mr-2 h-4 w-4" />
            Search
          </Button>
        </form>

        {/* Search Results Output */}
        {searchQuery.trim() ? (
          <div className="mt-6 max-h-96 overflow-y-auto">
            {searchResults.length > 0 ? (
              <>
                <h3 className="text-lg font-medium mb-2 text-gray-800">
                  {searchResults.length}{" "}
                  {searchResults.length === 1 ? "result" : "results"} found
                </h3>
                <div className="space-y-3">
                  {searchResults.map((result) => (
                    <Link
                      key={result.id}
                      to={result.path}
                      className="block p-4 hover:bg-green-50 rounded-lg border border-gray-200 transition-all duration-200 hover:shadow-sm"
                      onClick={() => {
                        setIsSearchOpen(false);
                        clearSearch();
                      }}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-semibold text-green-800">
                            {result.name}
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            {result.category}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-green-700">
                            {result.price}
                          </div>
                          <div className="text-xs text-yellow-600 mt-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <span key={i}>
                                {i < Math.floor(result.rating) ? "★" : "☆"}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <FiSearch className="mx-auto h-12 w-12 text-gray-300" />
                <h3 className="mt-2 text-lg font-medium text-gray-700">
                  No results found
                </h3>
                <p className="mt-1 text-gray-500">
                  We couldn't find any matches for "{searchQuery}"
                </p>
                <button
                  onClick={clearSearch}
                  className="mt-4 text-sm text-green-600 hover:text-green-800 font-medium"
                >
                  Clear search and try again
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-3 text-gray-800">
              Popular Searches
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Seeds",
                "Fertilizer",
                "Loan",
                "Subsidy",
                "Equipment",
                "Organic",
              ].map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchQuery(term)}
                  className="px-3 py-1 bg-gray-100 hover:bg-green-100 rounded-full text-sm text-gray-700 transition-colors border border-gray-200 cursor-pointer"
                >
                  {term}
                </button>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium mb-3 text-gray-800">
                Browse Categories
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Seeds & Crops",
                  "Farming Equipment",
                  "Financial Services",
                  "Government Schemes",
                ].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSearchQuery(category.split(" ")[0])}
                    className="px-4 py-3 bg-gray-50 hover:bg-green-50 rounded-md text-sm text-left text-gray-700 transition-colors border border-gray-200 cursor-pointer"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SearchComponent;
