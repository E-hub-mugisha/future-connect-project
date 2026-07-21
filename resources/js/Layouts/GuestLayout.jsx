import React, { useEffect } from "react";
import { usePage } from "@inertiajs/react";

import UserHeader from "@/Components/UserHeader";
import UserFooter from "@/Components/UserFooter";
import "../../guest/plugins/tabler-icons/tabler-icons.min.css";
import "../../guest/plugins/fontawesome/css/all.min.css";
import "../../guest/css/feather.css";
import "../../guest/css/owl.carousel.min.css";
import "../../guest/plugins/select2/css/select2.min.css";
import "../../guest/css/style.css";
import "../../guest/css/bootstrap.min.css";
import "../../guest/js/theme-script.js";

export default function GuestLayout({ children }) {


    useEffect(() => {

        // Initialize AOS
        if(window.AOS){
            window.AOS.init();
        }


        // Initialize swiper
        if(window.Swiper){

            const captionSwiper =
                new window.Swiper('#captionSwiper', {
                    effect:'fade',
                    loop:true,
                    speed:700,
                });


            const imageSwiper =
                new window.Swiper('#imageSwiper', {

                    effect:'coverflow',
                    loop:true,
                    centeredSlides:true,
                    slidesPerView:'auto',

                    autoplay:{
                        delay:4000
                    }

                });


            imageSwiper.on(
                'slideChangeTransitionStart',
                ()=>{
                    captionSwiper.slideToLoop(
                        imageSwiper.realIndex
                    );
                }
            );
        }


    }, []);



    const { flash } = usePage().props;


    useEffect(()=>{

        if(window.toastr && flash){

            if(flash.success)
                toastr.success(flash.success);


            if(flash.error)
                toastr.error(flash.error);


            if(flash.warning)
                toastr.warning(flash.warning);


            if(flash.info)
                toastr.info(flash.info);

        }

    },[flash]);



    return (

        <div className="body-overlay-wrapper">

            <div className="main-wrapper">


                <UserHeader />


                {children}


                <UserFooter />


                <div className="back-to-top">

                    <a 
                        href="#top"
                        className="
                        back-to-top-icon
                        align-items-center
                        justify-content-center
                        d-flex
                        "
                    >

                        <i className="ti ti-arrow-badge-up"></i>

                    </a>

                </div>


            </div>

        </div>

    );
}