import { useState } from 'react';

function Tabs({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="tab-headers">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={
              index === activeIndex
                ? 'font-bold border-b-2 border-blue-500 px-4 py-2'
                : 'text-gray-500 px-4 py-2'
            }
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content p-4">
        {tabs[activeIndex].content}
      </div>
    </div>
  );
}

export default Tabs;
