import { Selectors } from "../pages/Page_object.spec";
//expect helps you make some assertions
import {expect,test} from "@playwright/test";
const Mailosaur = require("mailosaur")
const apiKey ="RY8iAdvBHll56M8XOMIpNRhKLy9KUKTa"
const mailosaur = new Mailosaur(apiKey)
const serverID = "2d5vmkwc"
const serverDomian = "@2d5vmkwc.mailosaur.net"
let emailAddress
// test("Test Page Lunch", async ({page})=>{
//     await page.goto(Selectors.url);
// })

test("Signup and retrieve email content", async ({page})=>{
    await page.goto(Selectors.url);
    //This generates a random email with the time generated.
    const randomString = new Date().getTime()
    //Generates a random email address and attach the email domain
    emailAddress = `${randomString}${serverDomian}` 

    //fill in signup form
    await page.click(Selectors.signup_link)
    await page.fill(Selectors.first_name_field, "Kobe")
    await page.fill(Selectors.last_name_field, "Durant")
    await page.fill(Selectors.email_field, emailAddress)
    await page.click(Selectors.submit_button)
})