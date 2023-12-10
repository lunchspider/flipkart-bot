import puppeteer from "puppeteer";
import { orderSpreadSheet } from "../spreadsheet.js";

export async function orderInfo(numberOfDays: number) {
    await orderSpreadSheet.loadInfo();
    const records = await orderSpreadSheet.sheetsByIndex[0].getRows();
    for (let i = 0; i < records.length; i++) {
        const record = records[i];
        record.set("attempted", 'Y');
        try {
            const browser = await puppeteer.launch({
                headless: false,
                args: ['--disable-notifications'],
                defaultViewport: null
            });
            const page = await browser.newPage();
            await browser.close();
        } catch (e: any) {
            record.set("error", e);
        } finally {
            await record.save();
        }
    }
}
