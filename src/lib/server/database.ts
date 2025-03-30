const invoices: Invoice[] = [
	{
		id: '1b9c4bd7-cab0-4ea2-bfcf-b49b134bbc43',
        client: 'Umbrella Corp',
		description: 'Racoon City Mapping',
		amount: 1500,
		status: 'submitted'
	},
	{
		id: '756c8bc1-2ac2-4c31-8c55-13918e447999',
        client: 'Stark Industries',
		description: 'Rocket Testing',
		amount: 2000,
		status: 'submitted'
	},
	{
		id: '407e2fb0-3aed-42c0-9c19-027b946a8472',
        client: 'Cyberdyne Systems',
		description: 'Skynet Tech Support',
		amount: 1000,
		status: 'submitted'
	}
];

export function getInvoices() {
    return invoices;
}

export function getInvoice(id: string) {
    return invoices.find(invoice => invoice.id === id);
}

export function createInvoice(invoice: InvoiceInsert) {
    invoices.push({
		id: crypto.randomUUID(),
		...invoice
	});
}

export function deleteInvoice(id: string) {
    let index = invoices.findIndex(invoice => invoice.id === id);
    if (index !== -1) {
        invoices.splice(index, 1)
    }
}