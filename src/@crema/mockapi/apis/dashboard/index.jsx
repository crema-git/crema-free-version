import mock from "../MockConfig";
import ecommerce from "../../fakedb/dashboard/ecommerce";
import healthCare from "../../fakedb/dashboard/healthCare";

// Define all mocks of dashboard

mock.onGet("/dashboard/ecommerce").reply(200, ecommerce);

mock.onGet("/dashboard/health_care").reply(200, healthCare);
