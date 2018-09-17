---
title: "Contact"
created: 2018-04-22T11:32:15-04:00
updated: 2018-04-22T11:32:15-04:00
draft: false
---
<div class="bg-white p-5 rounded-lg">
    <h2 class="text-black text-xl font-normal font-semibold">Please use the form below if you wish to contact me.</h2>
    <form class="shadow-lg border border-grey-light p-5 mt-2" netlify>
        <div class="mb-4 flex items-center">
            <label class="text-grey-darker text-lg font-bold mr-4" for="name">Name:</label>
            <input class="shadow border rounded w-full py-2 px-3 text-grey-darker focus:outline-none focus:shadow-outline"
                id="name" name="name" type="text" placeholder="Bob Belcher" required>
        </div>
        <div class="mb-4 flex items-center">
            <label class="text-grey-darker text-lg font-bold mr-4" for="email">Email:</label>
            <input class="shadow border rounded w-full py-2 px-3 text-grey-darker focus:outline-none focus:shadow-outline"
                id="email" name="email" type="email" placeholder="bbelcher@burgers.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                required>
        </div>
        <div class="mb-4">
            <label class="text-white text-lg font-bold" for="">
                <textarea class="rounded shadow-lg w-full p-2 border border-grey-light focus:outline-none focus:shadow-outline"
                    id="content" name="content" rows="4" placeholder="Enter contents of your message here." required></textarea>
        </div>
        <div class="mb-4">
            <input type="checkbox" tabindex="0" required>
            <label>I agree to have my contact information stored by this website.</label>
        </div>
        <div class="mb-4" data-netlify-recaptcha></div>
        <button class="bg-transparent hover:bg-orange text-orange-dark font-semibold hover:text-white py-2 px-4 border border-orange hover:border-transparent rounded" type="submit" name="button">Send Message</button>
    </form>
</div>