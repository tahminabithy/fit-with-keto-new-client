import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="footer footer-center bg-baseColor text-base-content p-4">
        <aside>
          <p className="text-white">
            Copyright © {new Date().getFullYear()} - All right reserved by Fit
            With Keto
          </p>
        </aside>
      </footer>
    </div>
  );
}
