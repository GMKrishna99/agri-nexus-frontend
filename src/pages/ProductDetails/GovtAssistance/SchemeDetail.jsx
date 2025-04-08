import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GOVERNMENT_SCHEMES } from "@/constants/GovtAss/governmentSchemes.constants";
import {
  FaRupeeSign,
  FaShieldAlt,
  FaLeaf,
  FaTint,
  FaTractor,
  FaPhone,
  FaEnvelope,
  FaExternalLinkAlt,
} from "react-icons/fa";
// import NotFound from "@/components/NotFound";

const SchemeDetail = () => {
  const { id } = useParams();
  const scheme = GOVERNMENT_SCHEMES.find((item) => item.id === id);

  if (!scheme) {
    return <NotFound />;
  }

  const getCategoryIcon = () => {
    switch (scheme.categoryId) {
      case "financial":
        return <FaRupeeSign className="mr-2" />;
      case "insurance":
        return <FaShieldAlt className="mr-2" />;
      case "organic":
        return <FaLeaf className="mr-2" />;
      case "irrigation":
        return <FaTint className="mr-2" />;
      case "equipment":
        return <FaTractor className="mr-2" />;
      default:
        return <FaRupeeSign className="mr-2" />;
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="flex items-center mb-6">
            <Badge
              variant="outline"
              className="text-green-600 border-green-600 text-sm"
            >
              {getCategoryIcon()}
              {scheme.categoryId.charAt(0).toUpperCase() +
                scheme.categoryId.slice(1)}
            </Badge>
          </div>

          <h1 className="text-3xl font-bold mb-4">{scheme.name}</h1>

          <img
            src={scheme.image}
            alt={scheme.name}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          <p className="text-lg text-gray-700 mb-8">{scheme.description}</p>

          {/* Benefits Section */}
          <Card className="mb-8">
            <CardHeader className="text-xl font-bold pb-0">
              Key Benefits
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {scheme.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Eligibility Section */}
          <Card className="mb-8">
            <CardHeader className="text-xl font-bold pb-0">
              Eligibility Criteria
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {scheme.eligibility.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Application Process */}
          <Card className="mb-8">
            <CardHeader className="text-xl font-bold pb-0">
              How to Apply
            </CardHeader>
            <CardContent className="pt-6">
              <ol className="space-y-3 list-decimal list-inside">
                {scheme.applicationProcess.map((step, i) => (
                  <li key={i} className="pl-2">
                    {step}
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div>
          <Card className="sticky top-4 mb-6">
            <CardContent className="p-6">
              <Button className="w-full bg-green-600 hover:bg-green-700 mb-4">
                Apply Now <FaExternalLinkAlt className="ml-2" />
              </Button>
              <Button
                variant="outline"
                className="w-full text-green-600 border-green-600 hover:bg-blue-50"
              >
                Download Application Form
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader className="text-xl font-bold pb-0">
              Contact Details
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {scheme.contact.map((contact, i) => (
                  <div key={i} className="flex items-start">
                    {contact.includes("@") ? (
                      <FaEnvelope className="text-green-600 mt-1 mr-3" />
                    ) : (
                      <FaPhone className="text-green-600 mt-1 mr-3" />
                    )}
                    <span>{contact}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Related Schemes */}
          <Card className="mt-6">
            <CardHeader className="text-xl font-bold pb-0">
              Similar Schemes
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {GOVERNMENT_SCHEMES.filter(
                  (s) =>
                    s.categoryId === scheme.categoryId && s.id !== scheme.id
                )
                  .slice(0, 2)
                  .map((related) => (
                    <div
                      key={related.id}
                      className="border-b pb-4 last:border-0 last:pb-0"
                    >
                      <h3 className="font-semibold mb-1">{related.name}</h3>
                      <Button
                        asChild
                        variant="link"
                        className="text-green-600 p-0 h-auto"
                      >
                        <Link to={`/government-schemes/${related.id}`}>
                          View Details →
                        </Link>
                      </Button>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SchemeDetail;
