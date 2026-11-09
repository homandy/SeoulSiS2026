"use client";

export default function SeoulSis() {
  const days = [
    {
      d: "DAY 1 · 11/19",
      title: "🌸 廣藏＋鐘路＋下午二選一",
      items: [
        "05:20 ✈️ 到仁川機場",
        "07:00–07:30 🏠 Michelle屋企放行李＋梳洗",
        "08:00–09:00 🥣 早餐",
        "10:00–11:15 🛏️ 廣藏市場買被",
        "11:30–13:30 🦞 海天漁夫 Haecheon Eobu 龍蝦午餐",
        "13:30 🏠 返Michelle屋企小休",
        "15:00 🛍️ Option A：高速巴士地下街 → 新世界百貨 → Michelle附近晚餐",
        "15:00 🛍️ Option B：弘大行街 → 弘大晚餐",
      ],
      note: "凌晨機後唔好死頂，太攰就減行程休息。",
    },

    {
      d: "DAY 2 · 11/20",
      title: "🍂 抱川一日遊",
      items: [
        "07:30–08:00 🥣 早餐 Isaac Toast",
        "08:30 🚐 Michelle屋企出發",
        "09:30左右 📍 抵達抱川",
        "09:30–17:00 🍁 包車一日遊：景點・午餐・Cafe／影相",
        "17:00左右 🚐 開始返首爾",
        "18:30–19:30 預計到首爾",
        "19:30–20:00 🥩 韓國燒肉晚餐",
        "🏠 食完返新道林",
      ],
      note:
        "🚐 包車：6人／10小時／約HK$1,500。晚餐唔好Book太早，預防回程塞車。",
    },

    {
      d: "DAY 3 · 11/21",
      title: "💄 鐘路＋明洞＋Optional 東大門",
      items: [
        "09:00–10:00 🥣 早餐＋準備",
        "10:30 🚇 新道林 → 鐘路",
        "12:00 🍴 鐘路已訂餐廳 ✅",
        "13:30 ➡️ 前往明洞",
        "13:30–17:00 ✨ 彈性時間",
        "17:00–19:45 🛍️ 明洞瘋狂Shopping",
        "晚餐 🦀 可以食醬油蟹",
        "21:30 🛍️ 仲有力就繼續行／去東大門；冇力就返新道林",
      ],
      note:
        "🛒 Medicube AGE-R Booster・Anua Masks + Essence・Hapa Kristin Color Con・Cellology・KF頭髮纖維粉・Olive Young・Daiso",
    },

    {
      d: "DAY 4 · 11/22",
      title: "📸 聖水＋百貨公司／弘大",
      items: [
        "10:30 🥣 早餐＋準備",
        "➡️ 出發聖水洞",
        "🍦 黑芝麻雪糕",
        "15:45–17:30 🎈 Seoul DAL 首爾天空熱氣球",
        "17:30 ➡️ 弘大",
        "18:15–20:15 🛍️ 弘大Shopping（如Day 1已去，可改百貨公司）",
        "🌙 食完 → 新道林",
      ],
      note:
        "🌧️ Seoul DAL係Plan A：天氣唔得就Skip，唔好為咗熱氣球搞亂全日行程。",
    },

    {
      d: "DAY 5 · 11/23",
      title: "✈️ 附近最後衝刺＋回香港",
      items: [
        "08:30 🧳 起身＋開始Pack行李",
        "09:00 ☕ 蒸氣吐司＋Coffee 輕早餐；鮑魚粥Optional",
        "10:15 ➡️ 出發新龍山",
        "11:00–12:30 🌿 Neungdong Minari｜水芹＋白切肉",
        "12:30–14:00 🛍️ 龍山最後Shopping／Cafe",
        "14:15–14:30 🚕 離開龍山",
        "15:00 🏠 返回Michelle屋企",
        "15:00–16:15 🧳 Pack戰利品・整理Shopping・Check行李重量・最後準備",
        "🔴 16:30準時 Michelle屋企 → ICN",
        "20:00 ✈️ KE2011 ICN → HK",
        "23:10 🇭🇰 到香港",
      ],
      note:
        "🔴 16:30係死線。無論買成點，都要返Michelle屋企拎行李出機場。",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-100 via-orange-50 to-white text-zinc-800 pb-24">

      <header className="px-5 pt-12 pb-7 text-center">

        <span className="rounded-full bg-white px-4 py-2 text-xs font-bold tracking-widest text-rose-800 shadow">
          SEOUL · 5D4N · 6 GIRLS
        </span>

        <h1 className="mt-5 text-5xl font-black tracking-tight text-rose-900">
          SEOUL SIS 💕
        </h1>

        <p className="mt-3 font-semibold">
          19–23 NOV 2026
        </p>

        <div className="mx-auto mt-5 grid max-w-xl gap-3 sm:grid-cols-2">

          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <b>✈️ KE2012 · 11/19</b>
            <br />
            HK 00:55 → ICN 05:20
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <b>✈️ KE2011 · 11/23</b>
            <br />
            ICN 20:00 → HK 23:10
          </div>

        </div>

        <div className="mx-auto mt-4 max-w-xl rounded-2xl bg-white/90 p-4 text-sm shadow-sm">
          <b>🏠 Michelle屋企｜新道林站</b>
          <br />
          D-Cube City Apartment, Tower A, 28/F
          <br />
          662 Gyeongin-ro, Guro-gu, Seoul
          <br />
          서울특별시 구로구 경인로 662
        </div>

        <div className="mx-auto mt-4 max-w-xl rounded-2xl bg-red-600 p-4 font-black text-white shadow-lg">
          🔴 11/23 · 16:30 SHARP
          <br />
          Michelle屋企 → ICN
        </div>

      </header>

      <main className="mx-auto max-w-2xl space-y-4 px-4">

        {days.map((day) => (
          <section
            key={day.d}
            className="rounded-3xl bg-white p-5 shadow-sm"
          >

            <div className="text-xs font-extrabold tracking-wider text-rose-700">
              {day.d}
            </div>

            <h2 className="mt-1 text-xl font-black">
              {day.title}
            </h2>

            <div className="mt-4 space-y-2">

              {day.items.map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-rose-50/60 px-3 py-2 text-sm font-medium"
                >
                  {item}
                </div>
              ))}

            </div>

            <div className="mt-4 rounded-xl bg-amber-50 p-3 text-sm font-semibold text-amber-900">
              {day.note}
            </div>

          </section>
        ))}

        <section className="rounded-3xl bg-rose-900 p-5 text-white">

          <h2 className="text-xl font-black">
            ❤️ 今次Trip三大原則
          </h2>

          <ol className="mt-3 space-y-2 text-sm">

            <li>
              1️⃣ Day 1唔好死頂：搭完凌晨機，太攰就減行程休息。
            </li>

            <li>
              2️⃣ Day 4 Seoul DAL係Plan A：天氣唔得就Skip，唔好為咗熱氣球搞亂全日行程。
            </li>

            <li>
              3️⃣ Day 5 16:30係死線：無論買成點，都要返到Michelle屋企拎行李出機場。
            </li>

          </ol>

        </section>

      </main>

      <footer className="py-8 text-center text-xs text-zinc-500">
        👭✈️🇰🇷 Seoul Girls Trip Ready！ 💄🛍️🦀🐷🦞☕️
      </footer>

    </div>
  );
}
