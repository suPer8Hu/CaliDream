
import React from 'react';
import { AlertTriangle, Car, ShieldAlert, Sun, Info, CreditCard } from 'lucide-react';
import { Language } from '../types';
import { UI_TEXT } from '../constants';

interface TravelTipsProps {
  language: Language;
}

const TravelTips: React.FC<TravelTipsProps> = ({ language }) => {
  const t = UI_TEXT[language].tips;
  const isZh = language === 'zh';

  return (
    <div className="animate-slide-up max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-3">{t.title}</h2>
        <p className="text-gray-500">{t.desc}</p>
      </div>

      <div className="grid gap-6">
        {/* Safety Alert - Critical */}
        <div className="bg-red-50 rounded-2xl p-6 border border-red-100 flex gap-4">
          <div className="bg-red-100 p-3 rounded-xl h-fit shrink-0 text-red-600">
            <ShieldAlert size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg text-red-900 mb-2">
              {isZh ? '绝对不要在车里留任何东西！' : 'DO NOT LEAVE ANYTHING IN YOUR CAR!'}
            </h3>
            <p className="text-red-800/80 text-sm leading-relaxed mb-3">
              {isZh ? (
                <>
                  旧金山和洛杉矶的砸车窗盗窃非常猖獗（Smash and Grab）。
                  <br/>
                  <span className="font-bold">这是铁律：</span>即使是一个硬币、一件外套、一根数据线，都不要留在座位上。
                  下车时请务必带走所有行李，或者确认行李在完全不可见的后备箱中（SUV建议使用遮挡帘，但最好还是拿走）。
                </>
              ) : (
                <>
                  Car break-ins (Smash and Grab) are extremely common in SF and LA.
                  <br/>
                  <span className="font-bold">Golden Rule:</span> Never leave anything visible—no coins, jackets, or charging cables.
                  Take all luggage with you or ensure it is completely hidden in the trunk (use a trunk cover for SUVs, but taking it with you is safer).
                </>
              )}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Driving Tips */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
             <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-50 p-2 rounded-lg text-blue-600"><Car size={20} /></div>
                <h3 className="font-bold text-gray-900">{isZh ? '自驾规则' : 'Driving Rules'}</h3>
             </div>
             <ul className="space-y-3 text-sm text-gray-600">
               <li className="flex gap-2">
                 <span className="text-blue-500 font-bold">•</span>
                 <span>
                   {isZh 
                     ? <><strong className="text-gray-800">STOP 标志：</strong> 必须完全停稳3秒，遵循“先到先走”原则。</>
                     : <><strong className="text-gray-800">STOP Signs:</strong> Come to a full stop for 3 seconds. First to stop, first to go.</>
                   }
                 </span>
               </li>
               <li className="flex gap-2">
                 <span className="text-blue-500 font-bold">•</span>
                 <span>
                   {isZh
                     ? <><strong className="text-gray-800">Carpool Lane：</strong> 最左侧菱形标志车道，仅限2人及以上车辆使用（部分路段需FastTrak）。</>
                     : <><strong className="text-gray-800">Carpool Lane:</strong> Diamond lane on far left. 2+ people only.</>
                   }
                 </span>
               </li>
               <li className="flex gap-2">
                 <span className="text-blue-500 font-bold">•</span>
                 <span>
                   {isZh
                     ? <><strong className="text-gray-800">加油：</strong> 加州油价全美最贵，建议用 GasBuddy App 找便宜的油站。</>
                     : <><strong className="text-gray-800">Gas:</strong> Gas is expensive here. Use GasBuddy app to find cheaper stations.</>
                   }
                 </span>
               </li>
             </ul>
          </div>

          {/* Weather Tips */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
             <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-50 p-2 rounded-lg text-orange-600"><Sun size={20} /></div>
                <h3 className="font-bold text-gray-900">{isZh ? '天气与穿搭' : 'Weather & Wear'}</h3>
             </div>
             <ul className="space-y-3 text-sm text-gray-600">
               <li className="flex gap-2">
                 <span className="text-orange-500 font-bold">•</span>
                 <span>{isZh ? '加州虽然阳光好，但冬季（12-1月）早晚温差极大。' : 'California is sunny but winter (Dec-Jan) has huge temp drops at night.'}</span>
               </li>
               <li className="flex gap-2">
                 <span className="text-orange-500 font-bold">•</span>
                 <span>
                   {isZh 
                     ? <>旧金山妖风很大，体感温度可能只有几度，一定要带<strong className="text-gray-800">厚外套或羽绒服</strong>。</>
                     : <>SF is windy and cold! Bring a <strong className="text-gray-800">heavy jacket or puffer</strong>.</>
                   }
                 </span>
               </li>
               <li className="flex gap-2">
                 <span className="text-orange-500 font-bold">•</span>
                 <span>{isZh ? '一号公路海边风大，帽子建议选带绳子的，不然会吹跑。' : 'Coastal winds are strong. Wear hats with chin straps!'}</span>
               </li>
             </ul>
          </div>

          {/* Payment & Misc */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
             <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-50 p-2 rounded-lg text-green-600"><CreditCard size={20} /></div>
                <h3 className="font-bold text-gray-900">{isZh ? '支付与小费' : 'Payment & Tips'}</h3>
             </div>
             <p className="text-sm text-gray-600 leading-relaxed mb-3">
               {isZh 
                 ? '绝大部分地方支持刷卡（Visa/Mastercard），准备少量现金（20-50刀）用于路边摊或代客泊车小费即可。'
                 : 'Cards (Visa/Mastercard) accepted almost everywhere. Keep $20-50 cash for valet or street food.'
               }
             </p>
             <p className="text-sm text-gray-600 leading-relaxed">
               {isZh
                 ? <><strong className="text-gray-800">小费标准：</strong> 餐厅堂食一般给 18%-20%（午餐）或 20%-25%（晚餐）。</>
                 : <><strong className="text-gray-800">Tipping:</strong> Standard is 18-20% for lunch, 20-25% for dinner.</>
               }
             </p>
          </div>

          {/* Navigation */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
             <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-50 p-2 rounded-lg text-purple-600"><Info size={20} /></div>
                <h3 className="font-bold text-gray-900">{isZh ? '导航提示' : 'Navigation'}</h3>
             </div>
             <p className="text-sm text-gray-600 leading-relaxed">
               {isZh
                 ? <>一号公路的大苏尔（Big Sur）路段几乎<strong className="text-gray-800">没有手机信号</strong>。</>
                 : <>There is almost <strong className="text-gray-800">NO CELL SIGNAL</strong> in Big Sur.</>
               }
             </p>
             <p className="text-sm text-gray-600 leading-relaxed mt-2">
               {isZh
                 ? <>出发前务必在 Google Maps 下载好<strong className="text-gray-800">离线地图</strong>区域。不要完全依赖在线导航。</>
                 : <>Download <strong className="text-gray-800">Offline Maps</strong> on Google Maps before you leave!</>
               }
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelTips;
