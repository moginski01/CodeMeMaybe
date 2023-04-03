import React from "react";
import "./cookie.css";
import { Link } from "react-router-dom";

const Cookie = () => {
    return (
        // todo privacy policy
        <div className="container mx-auto text-justify text-white m-5">
            <p className="text-4xl font-extrabold mb-5">
                Cookie Policy for Code My Maybe
            </p>
            <p className="mb-2">
                This is the Cookie Policy for Code My Maybe, accessible from
                CodeMeMaybe.dev
            </p>

            <p className="text-2xl font-semibold mb-2">What Are Cookies</p>

            <p className="mb-2 tracking-wide">
                As is common practice with almost all professional websites this
                site uses cookies, which are tiny files that are downloaded to
                your computer, to improve your experience. This page describes
                what information they gather, how we use it and why we sometimes
                need to store these cookies. We will also share how you can
                prevent these cookies from being stored however this may
                downgrade or 'break' certain elements of the sites
                functionality.
            </p>

            <p className="text-2xl font-semibold mb-2">How We Use Cookies</p>

            <p className="mb-2 tracking-wide">
                We use cookies for a variety of reasons detailed below.
                Unfortunately in most cases there are no industry standard
                options for disabling cookies without completely disabling the
                functionality and features they add to this site. It is
                recommended that you leave on all cookies if you are not sure
                whether you need them or not in case they are used to provide a
                service that you use.
            </p>

            <p className="text-2xl font-semibold mb-2">Disabling Cookies</p>

            <p className="mb-2 tracking-wide">
                You can prevent the setting of cookies by adjusting the settings
                on your browser (see your browser Help for how to do this). Be
                aware that disabling cookies will affect the functionality of
                this and many other websites that you visit. Disabling cookies
                will usually result in also disabling certain functionality and
                features of the this site. Therefore it is recommended that you
                do not disable cookies. This Cookies Policy was created with the
                help of the{" "}
                <a href="https://www.termsfeed.com/cookies-policy-generator/">
                    Cookies Policy Generator
                </a>
                .
            </p>
            <p className="text-2xl font-semibold mb-2">The Cookies We Set</p>
            <ul>
                <li>
                    <p className="text-xl font-medium mb-2">Account related cookies</p>
                    <p className="mb-2 tracking-wide">
                        If you create an account with us then we will use
                        cookies for the management of the signup process and
                        general administration. These cookies will usually be
                        deleted when you log out however in some cases they may
                        remain afterwards to remember your site preferences when
                        logged out.
                    </p>
                </li>
                <li>
                    <p className="text-xl font-medium mb-2">Login related cookies</p>
                    <p className="mb-2 tracking-wide">
                        We use cookies when you are logged in so that we can
                        remember this fact. This prevents you from having to log
                        in every single time you visit a new page. These cookies
                        are typically removed or cleared when you log out to
                        ensure that you can only access restricted features and
                        areas when logged in.
                    </p>
                </li>
                <li>
                    <p className="text-xl font-medium mb-2">Orders processing related cookies</p>
                    <p className="mb-2 tracking-wide">
                        This site offers e-commerce or payment facilities and
                        some cookies are essential to ensure that your order is
                        remembered between pages so that we can process it
                        properly.
                    </p>
                </li>
                <li>
                    <p className="text-xl font-medium mb-2">Forms related cookies</p>
                    <p className="mb-2 tracking-wide">
                        When you submit data to through a form such as those
                        found on contact pages or comment forms cookies may be
                        set to remember your user details for future
                        correspondence.
                    </p>
                </li>
            </ul>

            <p className="text-2xl font-semibold mb-2">Third Party Cookies</p>
            <p className="mb-2 tracking-wide">
                In some special cases we also use cookies provided by trusted
                third parties. The following section details which third party
                cookies you might encounter through this site.
            </p>
            <ul>
                <li>
                    <p className="mb-2 tracking-wide">
                        Third party analytics are used to track and measure
                        usage of this site so that we can continue to produce
                        engaging content. These cookies may track things such as
                        how long you spend on the site or pages you visit which
                        helps us to understand how we can improve the site for
                        you.
                    </p>
                </li>
                <li>
                    <p className="mb-2 tracking-wide">
                        We also use social media buttons and/or plugins on this
                        site that allow you to connect with your social network
                        in various ways. For these to work the following social
                        media sites including; Facebook, Twitter, Linkdin, will
                        set cookies through our site which may be used to
                        enhance your profile on their site or contribute to the
                        data they hold for various purposes outlined in their
                        respective privacy policies.
                    </p>
                </li>
            </ul>

            <p className="text-2xl font-semibold mb-2">More Information</p>

            <p className="mb-2 tracking-wide">
                Hopefully that has clarified things for you and as was
                previously mentioned if there is something that you aren't sure
                whether you need or not it's usually safer to leave cookies
                enabled in case it does interact with one of the features you
                use on our site.
            </p>

            <p className="mb-2 tracking-wide">
                For more general information on cookies, please read{" "}
                <a href="https://www.cookiepolicygenerator.com/sample-cookies-policy/">
                    the Cookies Policy article
                </a>
                .
            </p>

            <p className="mb-2 tracking-wide">
                However if you are still looking for more information then you
                can contact us through one of our preferred contact methods:
            </p>

            <ul className="text-lg font-bold">
                <li>Phone: +42 123 123 123</li>
                <li><Link to="/contact">Forms</Link></li>
            </ul>
        </div>
    );
};

export default Cookie;
