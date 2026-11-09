"use client";

import { useState } from "react";

const days = [
  {
    tab: "11.19",
    label: "11.19 (四)",
    weather: "🌤️",
    items: [
      {
        time: "05:20",
        icon: "✈️",
        title: "到仁川機場",
        detail: "KE2012｜HK 00:55 → ICN 05:20",
      },
      {
        time: "07:00–07:30",
        icon: "🏠",
        title: "Michelle屋企放行李＋梳洗",
        detail:
          "新道林站｜D-Cube City Apartment, Tower A, 28/F\n662 Gyeongin-ro, Guro-gu, Seoul\n서울특별시 구로구 경인로 662",
      },
      {
        time: "08:00–09:00",
        icon: "🥣",
        title: "早餐",
      },
      {
        time: "10:00–11:15",
        icon: "🛏️",
        title: "廣藏市場買被",
      },
      {
        time: "11:30–13:30",
        icon: "🦞",
        title: "海天漁夫 Haecheon Eobu 龍蝦午餐",
      },
      {
        time: "13:30",
        icon: "🏠",
        title: "返 Michelle屋企小休",
      },
      {
        time: "15:00",
        icon: "🛍️",
        title: "下午行程二選一",
        detail:
          "Option A：高速巴士地下街 → 新世界百貨 → Michelle附近晚餐\n\nOption B：弘大行街 → 弘大晚餐",
      },
    ],
    note: "凌晨機後唔好死頂，太攰就減行程休息。",
  },

  {
    tab: "11.20",
    label: "11.20 (五)",
    weather: "🍂",
    items: [
            {
        time: "07:30–08:00",
        icon: "🥪",
        title: "早餐｜Isaac Toast",
      },
      {
        time: "08:30",
        icon: "🚐",
        title: "Michelle屋企出發",
      },
      {
        time: "09:30左右",
        icon: "📍",
        title: "抵達抱川",
      },
      {
        time: "09:30–17:00",
        icon: "🍁",
        title: "抱川包車一日遊",
        detail: "景點・午餐・Cafe／影相",
      },
      {
        time: "17:00左右",
        icon: "🚐",
        title: "開始返首爾",
      },
            {
        time: "18:30–19:30",
        icon: "🏙️",
        title: "預計到首爾",
      },
      {
        time: "19:30–20:00",
        icon: "🥩",
        title: "韓國燒肉晚餐",
        detail: "食完返新道林",
      },
    ],
    note:
      "包車：6人／10小時／約HK$1,500。晚餐唔好Book太早，預防回程塞車。",
  },

  {
    tab: "11.21",
    label: "11.21 (六)",
    weather: "💄",
    items: [
            {
        time: "09:00–10:00",
        icon: "🥣",
        title: "早餐＋準備",
      },
      {
        time: "10:30",
        icon: "🚇",
        title: "新道林 → 鐘路",
      },
      {
        time: "12:00",
        icon: "🍴",
        title: "鐘路已訂餐廳 ✅",
      },
      {
        time: "13:30",
        icon: "➡️",
        title: "前往明洞",
      },
      {
        time: "13:30–17:00",
        icon: "✨",
        title: "彈性時間",
      },
            {
        time: "17:00–19:45",
        icon: "🛍️",
        title: "明洞瘋狂 Shopping",
      },
      {
        time: "晚餐",
        icon: "🦀",
        title: "可以食醬油蟹",
      },
      {
        time: "21:30",
        icon: "🌙",
        title: "Optional：繼續行／去東大門",
        detail: "冇力就返新道林",
      },
    ],
    note:
      "Shopping：Medicube AGE-R Booster・Anua Masks + Essence・Hapa Kristin Color Con・Cellology・KF頭髮纖維粉・Olive Young・Daiso",
  },

  {
    tab: "11.22",
    label: "11.22 (日)",
    weather: "📸",
    items: [
            {
        time: "10:30",
        icon: "🥣",
        title: "早餐＋準備",
      },
      {
        time: "[--:--]",
        icon: "🏙️",
        title: "出發聖水洞",
      },
      {
        time: "[--:--]",
        icon: "🍦",
        title: "黑芝麻雪糕",
      },
      {
        time: "15:45–17:30",
        icon: "🎈",
        title: "Seoul DAL 首爾天空熱氣球",
        detail:
          "天氣唔得就 Skip，唔好為咗熱氣球搞亂全日行程。",
      },
            {
        time: "17:30",
        icon: "➡️",
        title: "前往弘大",
      },
      {
        time: "18:15–20:15",
        icon: "🛍️",
        title: "弘大 Shopping",
        detail: "如 Day 1 已去弘大，可改百貨公司",
      },
      {
        time: "晚上",
        icon: "🏠",
        title: "食完 → 新道林",
      },
    ],
    note:
      "Seoul DAL 係 Plan A；大風、雨或其他天氣問題就直接 Skip。",
  },

  {
    tab: "11.23",
    label: "11.23 (一)",
    weather: "✈️",
    alert: "16:30 SHARP｜Michelle屋企 → ICN",
    items: [
            {
        time: "08:30",
        icon: "🧳",
        title: "起身＋開始 Pack 行李",
      },
      {
        time: "09:00",
        icon: "☕",
        title: "蒸氣吐司＋Coffee 輕早餐",
        detail: "鮑魚粥 Optional",
      },
      {
        time: "10:15",
        icon: "➡️",
        title: "出發新龍山",
      },
      {
        time: "11:00–12:30",
        icon: "🌿",
        title: "Neungdong Minari",
        detail: "水芹＋白切肉",
      },
      {
        time: "12:30–14:00",
        icon: "🛍️",
        title: "龍山最後 Shopping／Cafe",
      },
            {
        time: "14:15–14:30",
        icon: "🚕",
        title: "離開龍山",
      },
      {
        time: "15:00",
        icon: "🏠",
        title: "返回 Michelle屋企",
      },
      {
        time: "15:00–16:15",
        icon: "⚖️",
        title: "最後執行李",
        detail:
          "Pack戰利品・整理Shopping・Check行李重量・最後準備",
      },
      {
        time: "16:30",
        icon: "🔴",
        title: "準時 Michelle屋企 → ICN",
      },
      {
        time: "20:00",
        icon: "✈️",
        title: "KE2011｜ICN → HK",
      },
      {
        time: "23:10",
        icon: "🇭🇰",
        title: "到香港",
      },
    ],
    note:
      "16:30 係死線。無論買成點，都要準時拎行李出機場。",
  },
];
function TripCard({
  item,
  index,
  openIndex,
  setOpenIndex,
}) {
  const isOpen = openIndex === index;
  const hasDetail = Boolean(item.detail);

  return (
    <article className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="absolute inset-y-0 left-0 w-1 bg-blue-600" />

      <button
        type="button"
        onClick={() =>
          hasDetail &&
          setOpenIndex(isOpen ? null : index)
        }
        className="flex w-full items-center gap-3 px-5 py-4 text-left"
      >
                  <div className="min-w-0 flex-1">
          <div className="text-xs font-bold text-red-600">
            {item.time}
          </div>

          <div className="mt-1 text-[16px] font-extrabold text-slate-900">
            <span className="mr-2">
              {item.icon}
            </span>

            {item.title}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-2 py-1 text-xs">
            📍
          </span>

          {hasDetail && (
            <span className="text-xl text-slate-400">
              {isOpen ? "⌃" : "⌄"}
            </span>
          )}
        </div>

      </button>
      {isOpen && hasDetail && (
        <div className="whitespace-pre-line border-t border-slate-100 bg-slate-50 px-5 py-4 text-sm leading-6 text-slate-600">
          {item.detail}
        </div>
      )}

    </article>
  );
}
export default function SeoulSis() {
  const [activeDay, setActiveDay] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const day = days[activeDay];

  function changeDay(index) {
    setActiveDay(index);
    setOpenIndex(null);
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      <div className="mx-auto min-h-screen max-w-3xl bg-slate-50">

        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">

          <div className="flex items-center justify-between px-5 py-3">

            <div className="flex items-center gap-3">

              <div className="text-3xl">
                🍑
              </div>

              <div>
                <h1 className="text-xl font-black leading-tight">
                  SeoulSis 2026
                </h1>

                <p className="text-xs font-semibold text-blue-700">
                  11/19–23 首爾女子旅行
                </p>
              </div>

            </div>

            <div className="text-3xl">
              🇰🇷
            </div>

          </div>
            <div className="no-scrollbar flex gap-2 overflow-x-auto px-4 pb-3 pt-1">

            {days.map((item, index) => (

              <button
                key={item.tab}
                type="button"
                onClick={() => changeDay(index)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-extrabold transition ${
                  activeDay === index
                    ? "bg-blue-700 text-white ring-2 ring-blue-500 ring-offset-2"
                    : "border border-slate-200 bg-white text-slate-600 shadow-sm"
                }`}
              >
                {item.tab}
              </button>

            ))}

          </div>

        </header>
        <section className="px-4 pb-12 pt-6 sm:px-8">

          <div className="mb-5 flex items-center justify-between">

            <h2 className="text-xl font-black">
              🗓️ {day.label}
            </h2>

            <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold shadow-sm">
              天氣 {day.weather}
            </div>

          </div>

          {day.alert && (

            <div className="mb-4 rounded-2xl bg-red-600 px-5 py-4 text-center font-black text-white shadow-md">

              🔴 FLIGHT DAY
              <br />

              {day.alert}

            </div>

          )}
          <div className="space-y-3">

            {day.items.map((item, index) => (

              <TripCard
                key={`${item.time}-${item.title}`}
                item={item}
                index={index}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />

            ))}

          </div>
          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm font-semibold leading-6 text-amber-900">
            💡 {day.note}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600 shadow-sm">

            <b className="text-slate-900">
              🏠 Michelle屋企｜新道林站
            </b>

            <br />

            D-Cube City Apartment, Tower A, 28/F

            <br />

            662 Gyeongin-ro, Guro-gu, Seoul

            <br />

            서울특별시 구로구 경인로 662

          </div>

        </section>

      </div>

    </main>
  );
}
