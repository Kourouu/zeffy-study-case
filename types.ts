export type Donation = {
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

export type DonationResponse = {
  id: string,
  type: DonationType,
  refundedAmount: number,
  donation: Donation
}[]