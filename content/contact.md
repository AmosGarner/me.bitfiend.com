---
title: "Contact"
created: 2018-04-22T11:32:15-04:00
updated: 2018-04-22T11:32:15-04:00
draft: false
---
Please use the form below if you wish to contact me.
---
<form class="ui form" netlify>
    <div class="field">
        <label>Name:</label>
        <input class="input" type="text" name="name" value="" placeholder="Bob Belcher">
    </div>
    <div class="field" pattern="[a-z0-9A-Z]" required>
        <label>Email:</label>
        <input class="input" type="email" name="email" value="" placeholder="bbelcher@burgers.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required>
    </div>
    <div class="field">
        <textarea class="input" rows="2" name="content" placeholder="Enter contents of your message here." required></textarea>
    </div>
    <div class="ui divider"></div>
    <div class="field">
        <div class="ui checkbox">
            <input type="checkbox" class="" tabindex="0" required>
            <label>I agree to have this information stored and available for review by this sites admin, who may also use this info to contact me regarding the contents of this form.</label>
        </div>
    </div>
    <div data-netlify-recaptcha></div>
    <button type="submit" name="button" class="ui submit button">Send Message</button>
</form>
