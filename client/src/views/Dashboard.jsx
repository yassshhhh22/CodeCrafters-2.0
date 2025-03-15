import React from 'react'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <header className="flex items-center justify-between bg-white border-b px-4 py-2">
        <div className="flex items-center space-x-4">
          <div className="text-green-600 font-bold text-xl">
            <span className="bg-green-100 p-1 rounded">S</span>tox
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div>
              SENSEX <span className="text-red-500">73,828.91</span>{" "}
              <span className="text-red-500">-200.85 (-0.27%)</span>
            </div>
            <div>
              NIFTY <span className="text-red-500">22,397.20</span>{" "}
              <span className="text-red-500">-73.30 (-0.33%)</span>
            </div>
          </div>
        </div>
        <div className="text-sm font-medium">
          <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
            AP
          </span>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="w-60 bg-white border-r overflow-y-auto">
          <div className="p-3">
            <input
              type="text"
              placeholder="Stocks, Futures & Options"
              className="w-full border rounded px-2 py-1 text-sm"
            />
          </div>
          <ul className="space-y-1 text-sm">
            {[
              { name: "YESBANK NSE", price: "16.19", change: "+0.04 (+0.25%)" },
              { name: "ONGC BSE", price: "225.43", change: "+0.80 (+0.36%)" },
              { name: "IRCTC NSE", price: "689.05", change: "-3.15 (-1.13%)" },
              { name: "SAICOM BSE", price: "0.35", change: "-0.01 (-2.78%)" },
              // ... add more items as needed
            ].map((stock, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center px-3 py-2 hover:bg-gray-100"
              >
                <div>{stock.name}</div>
                <div className="text-right">
                  <div>{stock.price}</div>
                  <div
                    className={
                      stock.change.startsWith("+")
                        ? "text-green-600 text-xs"
                        : "text-red-600 text-xs"
                    }
                  >
                    {stock.change}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 overflow-y-auto">
          {/* Tabs */}
          <div className="flex space-x-8 border-b mb-4">
            <button className="pb-2 border-b-2 border-indigo-500 text-indigo-500 font-semibold">
              Overview
            </button>
            <button className="pb-2 text-gray-600 hover:text-gray-800">
              Equity
            </button>
            <button className="pb-2 text-gray-600 hover:text-gray-800">
              Bonds
            </button>
          </div>

          {/* Top cards: Invested Amount, Current Value, etc. */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="p-4 bg-white rounded shadow text-center">
              <div className="text-sm text-gray-500">Invested Amount</div>
              <div className="text-xl font-semibold">₹29.00</div>
            </div>
            <div className="p-4 bg-white rounded shadow text-center">
              <div className="text-sm text-gray-500">Current Value</div>
              <div className="text-xl font-semibold">₹23.00</div>
            </div>
            <div className="p-4 bg-white rounded shadow text-center">
              <div className="text-sm text-gray-500">Overall Loss</div>
              <div className="text-xl font-semibold text-red-600">₹6.77</div>
              <div className="text-sm text-red-600">-23.34%</div>
            </div>
            <div className="p-4 bg-white rounded shadow text-center">
              <div className="text-sm text-gray-500">Today's Gain</div>
              <div className="text-xl font-semibold text-green-600">
                ₹0.00
              </div>
              <div className="text-sm text-green-600">0.00%</div>
            </div>
          </div>

          {/* Holdings Table */}
          <div className="bg-white rounded shadow mb-4">
            <div className="p-4 border-b">
              <h2 className="font-semibold text-lg">Holdings</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left font-medium">Stock Name</th>
                    <th className="px-4 py-2 text-right font-medium">Quantity</th>
                    <th className="px-4 py-2 text-right font-medium">Avg. Price</th>
                    <th className="px-4 py-2 text-right font-medium">LTP</th>
                    <th className="px-4 py-2 text-right font-medium">Inv. Amt</th>
                    <th className="px-4 py-2 text-right font-medium">Mkt. Val</th>
                    <th className="px-4 py-2 text-right font-medium">Overall G/L</th>
                    <th className="px-4 py-2 text-right font-medium">Day's G/L</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "ALSTONE",
                      quantity: 15,
                      avgPrice: 0.75,
                      ltp: 0.60,
                      invAmt: 11.25,
                      mktVal: 9.00,
                      overallGL: -2.25,
                      dayGL: 0.0,
                    },
                    {
                      name: "AVANCE",
                      quantity: 20,
                      avgPrice: 0.84,
                      ltp: 0.63,
                      invAmt: 16.8,
                      mktVal: 12.60,
                      overallGL: -4.20,
                      dayGL: 0.0,
                    },
                    {
                      name: "SAICOM",
                      quantity: 4,
                      avgPrice: 0.43,
                      ltp: 0.35,
                      invAmt: 1.72,
                      mktVal: 1.40,
                      overallGL: -0.32,
                      dayGL: 0.0,
                    },
                  ].map((item, idx) => (
                    <tr key={idx} className="border-b last:border-0">
                      <td className="px-4 py-2">{item.name}</td>
                      <td className="px-4 py-2 text-right">{item.quantity}</td>
                      <td className="px-4 py-2 text-right">{item.avgPrice}</td>
                      <td className="px-4 py-2 text-right">{item.ltp}</td>
                      <td className="px-4 py-2 text-right">{item.invAmt}</td>
                      <td className="px-4 py-2 text-right">{item.mktVal}</td>
                      <td
                        className={`px-4 py-2 text-right ${
                          item.overallGL < 0
                            ? "text-red-600"
                            : "text-green-600"
                        }`}
                      >
                        {item.overallGL}
                      </td>
                      <td
                        className={`px-4 py-2 text-right ${
                          item.dayGL < 0 ? "text-red-600" : "text-green-600"
                        }`}
                      >
                        {item.dayGL}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Portfolio Allocation + Analyse Returns + Top Drivers */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Portfolio Allocation */}
            <div className="bg-white rounded shadow p-4 flex-1">
              <h3 className="font-semibold mb-2">Portfolio Allocation</h3>
              {/* Example of bar or chart placeholder */}
              <div className="mt-4">
                <div className="text-sm font-medium mb-2">54.8% Trading</div>
                <div className="bg-gray-200 h-2 w-full rounded">
                  <div
                    className="bg-purple-600 h-2 rounded"
                    style={{ width: "54.8%" }}
                  ></div>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-sm font-medium mb-2">39.1% Finance/NBFC</div>
                <div className="bg-gray-200 h-2 w-full rounded">
                  <div
                    className="bg-pink-600 h-2 rounded"
                    style={{ width: "39.1%" }}
                  ></div>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-sm font-medium mb-2">8.1% Other</div>
                <div className="bg-gray-200 h-2 w-full rounded">
                  <div
                    className="bg-blue-600 h-2 rounded"
                    style={{ width: "8.1%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Analyse Returns */}
            <div className="bg-white rounded shadow p-4 flex-1">
              <h3 className="font-semibold mb-2">Analyse Returns</h3>
              <p className="text-sm text-gray-500">
                Check out sectorwise returns
              </p>
              {/* Placeholder for a bar chart or sector list */}
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Chemicals</span>
                  <span className="text-red-600">-18.60%</span>
                </div>
                <div className="flex justify-between">
                  <span>Finance/NBFC</span>
                  <span className="text-red-600">-20.00%</span>
                </div>
                <div className="flex justify-between">
                  <span>Trading</span>
                  <span className="text-red-600">-20.45%</span>
                </div>
              </div>
            </div>

            {/* Top Drivers */}
            <div className="bg-white rounded shadow p-4 flex-1">
              <h3 className="font-semibold mb-2">Top Drivers</h3>
              <div className="flex space-x-4 text-sm mb-4">
                <button className="border-b-2 border-indigo-500 text-indigo-500 pb-1">
                  Top Gainers
                </button>
                <button className="text-gray-500 hover:text-gray-700 pb-1">
                  Top Losers
                </button>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left font-medium">Stock</th>
                    <th className="px-4 py-2 text-right font-medium">LTP (%)</th>
                    <th className="px-4 py-2 text-right font-medium">
                      Today's Gain
                    </th>
                    <th className="px-4 py-2 text-right font-medium">52W High</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b last:border-0">
                    <td className="px-4 py-2">AVANCE</td>
                    <td className="px-4 py-2 text-right">0.63 (+1.61%)</td>
                    <td className="px-4 py-2 text-right">0.00</td>
                    <td className="px-4 py-2 text-right">1.62</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
