import React from "react";

export default function FooterDark() {
    return (
        <div className="footer-wrapper-dark">
            <div className="credit-line">
                <svg
                    preserveAspectRatio="xMinYMin meet"
                    class="footer-line"
                    viewBox="0 0 1020 1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line
                        x1="1020"
                        y1="0.5"
                        x2="-2.82126e-07"
                        y2="0.499911"
                        stroke="#989898"
                    />
                </svg>
            </div>
            <div className="lastBox">
                <div className="credit-box">
                    <p className="credit-text-dark">Copyright 2020 © Jingxuan Cao</p>
                </div>
            </div>
        </div>
    );
}