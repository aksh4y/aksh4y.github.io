import React, { useEffect } from 'react';
import $ from 'jquery';
import './style.scss';
import loader from './loader.json';
import Lottie from 'lottie-react';
import styled from '@emotion/styled';

const StyledLoader = styled(Lottie)`
    height: 500px;
`;

export default () => {
    useEffect(() => {
        function hidePreloader() {
            if ($('#preloader').length) {
                $('#preloader')
                    .delay(1000)
                    .fadeOut('slow', function () {
                        $(this).remove();
                    });
            }
        }

        if (document.readyState === 'complete') {
            hidePreloader();
        } else {
            window.addEventListener('load', hidePreloader);
        }

        // Cleanup
        return () => {
            window.removeEventListener('load', hidePreloader);
        };
    }, []);

    return (
        <div id="preloader">
            <StyledLoader animationData={loader} />
        </div>
    );
};