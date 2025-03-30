import * as db from '$lib/server/database';

export async function load() {
    const invoices = db.getInvoices();

    return {
        invoices
    }
}