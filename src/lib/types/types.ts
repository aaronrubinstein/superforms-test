type Status = 'draft' | 'submitted';

type Invoice = {
    id: string;
    client: string | undefined;
    description: string | undefined;
    amount: number | undefined;
    status: Status;
}

type InvoiceInsert = {
    client: string | undefined;
    description: string | undefined;
    amount: number | undefined;
    status: Status;
}