export type DonationDetails = {
    id: string,
    firstName: string,
    lastName: string,
    createdAtUtc: number,
    amount: number,
    thankYouComment: string | null,
    isAnonymous: boolean,
    companyName: string | null,
};

type DonationType = 'Charge' | 'Manual'

export type Donation = {
  id: string,
  type: DonationType,
  refundedAmount: number,
  donation: DonationDetails
}

export type DonationResponse = Donation[]