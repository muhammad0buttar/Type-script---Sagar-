interface ApiResponse {
  statusCode: number;
  message: string;
  totalRecords: number;
  data: IssuerInterface[]; // Nesting the array of typed objects here
}

// Usage in an API Test (e.g., Playwright API testing)
const sampleResponse: ApiResponse = {
  statusCode: 200,
  message: "Success",
  totalRecords: 2,
  data: [
    { id: 101, name: "Cigna", isActive: true },
    { id: 102, name: "Aetna", isActive: false }
  ]
};
console.log(sampleResponse: Id.101, )