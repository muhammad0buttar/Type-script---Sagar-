// 1. THE INTERFACE: Defines the mandatory structural contract
interface IPolicyContract {
    policyNumber: string;               // Must be implemented
    getPolicyDetails(): string;         // Must be implemented
}

// 2. THE PARENT CLASS: Uses 'implements' to satisfy the interface 
// contract
class InsurancePolicy implements IPolicyContract {
    // Encapsulation via Access Modifiers
    public policyNumber: string;         // Public to fulfill the interface contract
    protected basePremium: number;      // Protected: Hidden from outside, open to subclasses

    constructor(policyNumber: string, basePremium: number) {
        this.policyNumber = policyNumber;
        this.basePremium = basePremium;
    }

    public getPolicyDetails(): string {
        return `Contract ID: ${this.policyNumber}`;
    }
}

// 3. THE CHILD CLASS: Inherits from parent using 'extends'
class AccidentalCoverage extends InsurancePolicy {
    private accidentBenefitLimit: number; // Private: Strictly locked to this class

    constructor(policyNumber: string, basePremium: number, benefitLimit: number) 
    {
        super(policyNumber, basePremium);
        this.accidentBenefitLimit = benefitLimit;
    }

    public calculateTotalCoveragePayout(isAccidentalEvent: boolean): number {
        if (isAccidentalEvent) {
            // Accessing the inherited protected modifier property
            return this.accidentBenefitLimit + (this.basePremium * 0.1);
        }
        return 0;
    }
}

// --- Object Execution ---
const clientPolicy: IPolicyContract = new AccidentalCoverage("ACX-99281-2026", 500, 50000);

console.log(clientPolicy.getPolicyDetails());
// Output: Contract ID: ACX-99281-2026
