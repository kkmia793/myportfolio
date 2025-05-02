export default function Footer() {
    return (
      <footer className="text-center py-10 text-sm text-[#666] border-t border-[#222] mt-24">
        <p className="lang-en">
          © {new Date().getFullYear()} <span>Kota Kimura</span>. All rights reserved.
        </p>
      </footer>
    )
  }