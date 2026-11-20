import "./PageToggle.css";

const tabs = [
  {
    id: "personal",
    label: "Personal",
    href: "https://www.paypal.com/in/home?tab=personal",
  },
  { id: "business", label: "Business" },
];

function PageToggle({ active, onChange }) {
  return (
    <div className="toggle-wrap">
      <div className="toggle" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active === tab.id}
            className={`toggle-btn ${active === tab.id ? "active" : ""}`}
            onClick={() => {
            if (tab.href) {
              window.location.href = tab.href;
            } else {
              onChange(tab.id);
            }
          }}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PageToggle;