import Logo from "../assets/logo.png";
import LinkedIn from "../assets/linkedin.svg";

export default function () {
  return (
    <div className="flex grow flex-col m-10">
      <div className="flex grow flex-col items-center justify-center">
        <div>
          <img src={Logo} alt="logo" width="72" />
        </div>
        <p className="text-gray-300 mb-6">
          AI-powered business intelligence platform
        </p>
        <h1 className="text-4xl font-bold">COMING SOON</h1>
      </div>
      <div className="footer">
        <div className="flex flex-row">
          <p className="flex grow items-center text-md text-gray-500">
            © 2024 Nakhla.ai
          </p>
          <div>
            <a href="https://www.linkedin.com/company/nakhlaai">
              <img src={LinkedIn} alt="linkedin" width="32" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
