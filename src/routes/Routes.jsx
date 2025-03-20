import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Import all page components
import ViewAllProducts from "../pages/Marketplace/ViewAllProducts";
import VendorOptions from "../pages/Marketplace/VendorOptions";
import SeedCrops from "../pages/Marketplace/SeedCrops";
import SearchFilters from "../pages/Marketplace/SearchFilters";
import OrganicSustainableFarming from "../pages/Marketplace/OrganicSustainableFarming";
import FertilizersPesticides from "../pages/Marketplace/FertilizersPesticides";
import FarmingEquipment from "../pages/Marketplace/FarmingEquipment";

// Govt Assistance
import LatestSchemesPolicies from "../pages/GovernmentAssistance/LatestSchemesPolicies";
import CheckEligibility from "../pages/GovernmentAssistance/CheckEligibility";
import ApplyForSubsidy from "../pages/GovernmentAssistance/ApplyForSubsidy";
import TrackApplicationStatus from "../pages/GovernmentAssistance/TrackApplicationStatus";
import GovernmentLoanPrograms from "../pages/GovernmentAssistance/GovernmentLoanPrograms";
import UpcomingAgriculturalEventsWebinars from "../pages/GovernmentAssistance/UpcomingAgriculturalEventsWebinars";

// Financial Services
import LoanOptionsForFarmers from "../pages/FinancialServices/LoanOptionsForFarmers";
import EmiLoanCalculator from "../pages/FinancialServices/EmiLoanCalculator";
import ApplyForALoan from "../pages/FinancialServices/ApplyFroALoan";
import TrackLoanStatus from "../pages/FinancialServices/TrackLoanStatus";
import GovernmentPrivateBankPartnerships from "../pages/FinancialServices/GovernmentPrivateBankPartnerships";
import InsuranceRiskManagement from "../pages/FinancialServices/InsuranceRiskManagement";

// Consult an Expert
import FindAnAgriculturalConsultant from "../pages/ConsultAnExpert/FindAnAgriculturalConsultant";
import BookAConsultation from "../pages/ConsultAnExpert/BookAConsultation";
import VideoChatConsultations from "../pages/ConsultAnExpert/VideoChatConsultations";
import ExpertBlogsInsights from "../pages/ConsultAnExpert/ExpertBlogsInsights";
import SuccessStoriesCaseStudies from "../pages/ConsultAnExpert/SuccessStoriesCaseStudies";
import ConsultantOptions from "../pages/ConsultAnExpert/ConsultantOptions";

// Resources
import WeatherUpdatesForecasts from "../pages/Resources/WeatherUpdatesForecasts";
import MarketPricesOfCrops from "../pages/Resources/MarketPricesOfCrops";
import FarmingTipsBestPractices from "../pages/Resources/FarmingTipsBestPractices";
import GuidesTutorials from "../pages/Resources/GuidesTutorials";
import AgricultureNewsTrends from "../pages/Resources/AgricultureNewsTrends";
import HomePage from "../pages/HomePage";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Marketplace Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/marketplace" element={<ViewAllProducts />} />
        <Route path="/marketplace/seeds-crops" element={<SeedCrops />} />
        <Route path="/marketplace/search" element={<SearchFilters />} />
        <Route
          path="/marketplace/organic"
          element={<OrganicSustainableFarming />}
        />
        <Route
          path="/marketplace/fertilizers-pesticides"
          element={<FertilizersPesticides />}
        />
        <Route path="/marketplace/equipment" element={<FarmingEquipment />} />
        <Route path="/marketplace/vendor-options" element={<VendorOptions />} />

        {/* Government Assistance Routes */}
        <Route
          path="/govt-assistance/schemes"
          element={<LatestSchemesPolicies />}
        />
        <Route
          path="/govt-assistance/eligibility"
          element={<CheckEligibility />}
        />
        <Route path="/govt-assistance/apply" element={<ApplyForSubsidy />} />
        <Route
          path="/govt-assistance/track-status"
          element={<TrackApplicationStatus />}
        />
        <Route
          path="/govt-assistance/loan-programs"
          element={<GovernmentLoanPrograms />}
        />
        <Route
          path="/govt-assistance/events"
          element={<UpcomingAgriculturalEventsWebinars />}
        />

        {/* Financial Services Routes */}
        <Route
          path="/financial-services/loans"
          element={<LoanOptionsForFarmers />}
        />
        <Route
          path="/financial-services/calculator"
          element={<EmiLoanCalculator />}
        />
        <Route
          path="/financial-services/apply-loan"
          element={<ApplyForALoan />}
        />
        <Route
          path="/financial-services/track-loan"
          element={<TrackLoanStatus />}
        />
        <Route
          path="/financial-services/partnerships"
          element={<GovernmentPrivateBankPartnerships />}
        />
        <Route
          path="/financial-services/insurance"
          element={<InsuranceRiskManagement />}
        />

        {/* Consult an Expert Routes */}
        <Route
          path="/consult-expert/find"
          element={<FindAnAgriculturalConsultant />}
        />
        <Route path="/consult-expert/book" element={<BookAConsultation />} />
        <Route
          path="/consult-expert/video-chat"
          element={<VideoChatConsultations />}
        />
        <Route path="/consult-expert/blogs" element={<ExpertBlogsInsights />} />
        <Route
          path="/consult-expert/case-studies"
          element={<SuccessStoriesCaseStudies />}
        />
        <Route path="/consult-expert/options" element={<ConsultantOptions />} />

        {/* Resources Routes */}
        <Route
          path="/resources/weather"
          element={<WeatherUpdatesForecasts />}
        />
        <Route
          path="/resources/market-prices"
          element={<MarketPricesOfCrops />}
        />
        <Route
          path="/resources/farming-tips"
          element={<FarmingTipsBestPractices />}
        />
        <Route path="/resources/guides" element={<GuidesTutorials />} />
        <Route path="/resources/news" element={<AgricultureNewsTrends />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
