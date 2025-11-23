
import { ItineraryDay } from './types';

export const UI_TEXT = {
  zh: {
    nav: { itinerary: '路线规划', hotels: '酒店住宿', tips: '避雷指南', community: '博主社区' },
    hero: {
      subtitle: 'Road Trip 2024-2025',
      title1: '加州一号公路',
      title2: '终极跨年自驾指南',
      desc: '7天6晚，从洛杉矶的日落到旧金山的迷雾。这不仅是一次旅行，更是一场关于阳光、海风与自由的追逐。'
    },
    dayList: { title: '行程概览', subtitle: '12月30日 - 1月5日 · 7天6晚', miles: '英里', day: 'DAY' },
    detail: { drive: '车程', map: '在地图中打开', ticket: '门票', photoTip: '机位/拍照建议', mustVisit: '必打卡景点', hotels: '今日推荐酒店', refPrice: '参考价格', details: '查看详情', luxury: '奢华', comfort: '舒适', budget: '性价比' },
    hotels: { title: '加州美宿合集', desc: '从好莱坞的复古奢华，到大苏尔的悬崖秘境。精选三个价位，满足不同预算需求。' },
    tips: { title: '加州自驾避雷指南', desc: '安全第一！这些经验都是血泪教训换来的，出发前必看。' }
  },
  en: {
    nav: { itinerary: 'Itinerary', hotels: 'Hotels', tips: 'Travel Tips', community: 'Community' },
    hero: {
      subtitle: 'Road Trip 2024-2025',
      title1: 'California Highway 1',
      title2: 'Ultimate NYE Road Trip',
      desc: '7 days, 6 nights. From the sunsets of LA to the fog of SF. Chasing sunlight, ocean breeze, and freedom.'
    },
    dayList: { title: 'Overview', subtitle: 'Dec 30 - Jan 5 · 7 Days 6 Nights', miles: 'mi', day: 'DAY' },
    detail: { drive: 'Drive', map: 'Open in Maps', ticket: 'Ticket', photoTip: 'Photo Op / Tip', mustVisit: 'Must-Visit Spots', hotels: 'Recommended Hotels', refPrice: 'Avg. Price', details: 'Details', luxury: 'Luxury', comfort: 'Comfort', budget: 'Budget' },
    hotels: { title: 'Hotel Collection', desc: 'From vintage Hollywood glam to Big Sur cliffside retreats. Curated options for every budget.' },
    tips: { title: 'Safety & Travel Tips', desc: 'Safety First! Essential tips and warnings you must know before you go.' }
  }
};

export const ITINERARY_DATA_ZH: ItineraryDay[] = [
  {
    id: 1,
    date: "12月30日",
    title: "初见天使之城 & 艺术日落",
    route: "LAX -> The Broad -> Beverly Hills -> Santa Monica",
    shortDesc: "落地洛杉矶，打卡网红博物馆，在66号公路尽头看绝美日落。",
    description: "Welcome to LA! 第一天行程安排比较轻松。上午打卡当下最火的现代艺术博物馆，下午感受比弗利山庄的奢华，黄昏时分直奔圣莫尼卡海滩。",
    miles: 25,
    driveTime: "约 1 小时 (LA 交通拥堵，请预留时间)",
    mapQuery: "Santa Monica Pier, Santa Monica, CA",
    mainStops: [
      {
        name: "The Broad Museum",
        description: "LA最难预约的网红博物馆，草间弥生的无限镜屋必看。",
        photoTip: "在二楼的巨型餐桌椅子下拍照，或者在博物馆门口的白色蜂窝建筑前拍街拍。",
        isInstaWorthy: true,
        ticketInfo: "Free (需提前预约)",
        coordinates: { lat: 34.0545, lng: -118.2502 }
      },
      {
        name: "LACMA 城市之光 (Urban Light)",
        description: "由202盏复古路灯组成的装置艺术，晚上亮灯后超浪漫。",
        photoTip: "站在路灯阵列中间，利用对称构图。一定要晚上去！",
        isInstaWorthy: true,
        ticketInfo: "Free (外部)",
        coordinates: { lat: 34.0619, lng: -118.3585 }
      },
      {
        name: "圣莫尼卡码头 (Santa Monica Pier)",
        description: "66号公路的终点，太平洋游乐园。",
        photoTip: "日落时分在沙滩上拍摩天轮的剪影，或者去码头底下的桥洞拍光影大片。",
        isInstaWorthy: true,
        ticketInfo: "Free (游乐设施需付费)",
        coordinates: { lat: 34.0104, lng: -118.4960 }
      },
      {
        name: "盖蒂中心 (The Getty Center)",
        description: "依山而建的白色建筑群，可以俯瞰整个洛杉矶。",
        photoTip: "拍摄白色建筑与蓝天的几何构图，花园也非常出片。",
        isInstaWorthy: true,
        ticketInfo: "Free (停车 $20)",
        coordinates: { lat: 34.0780, lng: -118.4741 }
      }
    ],
    hotels: [
      {
        name: "1 Hotel West Hollywood",
        category: "Luxury",
        priceRange: "$450 - $600",
        rating: 4.8,
        description: "网美最爱，环保奢华风，顶楼泳池视野无敌，可以俯瞰整个洛杉矶。",
        bookingUrl: "https://www.google.com/search?q=1+Hotel+West+Hollywood+booking"
      },
      {
        name: "The Line Hotel LA",
        category: "Comfort",
        priceRange: "$200 - $300",
        rating: 4.4,
        description: "位于韩国城，工业风设计，房间落地窗可以看到好莱坞标志，楼下餐厅很好吃。",
        bookingUrl: "https://www.google.com/search?q=The+Line+Hotel+LA+booking"
      },
      {
        name: "Freehand Los Angeles",
        category: "Budget",
        priceRange: "$80 - $150",
        rating: 4.3,
        description: "非常有设计感的青年旅舍/精品酒店混合体，顶楼泳池酒吧很有名。",
        bookingUrl: "https://www.google.com/search?q=Freehand+Los+Angeles+booking"
      }
    ]
  },
  {
    id: 2,
    date: "12月31日",
    title: "电影梦工厂 & 跨年狂欢",
    route: "Universal Studios -> Hollywood Sign -> Grand Park",
    shortDesc: "在环球影城玩足一天，晚上加入数十万人的跨年倒数。",
    description: "如果你是电影迷，今天就是你的节日。白天在环球影城体验马里奥和哈利波特，傍晚去格里菲斯天文台看爱乐之城同款夜景，晚上跨年！",
    miles: 30,
    driveTime: "约 1.5 小时",
    mapQuery: "Griffith Observatory, Los Angeles, CA",
    mainStops: [
      {
        name: "好莱坞环球影城 (Universal Studios)",
        description: "必去马里奥园区和哈利波特城堡。Studio Tour是独家体验。",
        photoTip: "在霍格沃茨城堡前喝一杯黄油啤酒，或者在马里奥园区拍色彩鲜艳的多巴胺照片。",
        isInstaWorthy: true,
        ticketInfo: "$109 - $150",
        coordinates: { lat: 34.1381, lng: -118.3534 }
      },
      {
        name: "格里菲斯天文台 (Griffith Observatory)",
        description: "《爱乐之城》取景地，俯瞰LA夜景的最佳位置。",
        photoTip: "日落前到达，可以拍到粉紫色的天空和城市灯光逐渐亮起的瞬间。",
        isInstaWorthy: true,
        ticketInfo: "Free (天象馆 $10)",
        coordinates: { lat: 34.1184, lng: -118.3004 }
      },
      {
        name: "Lake Hollywood Park",
        description: "不用爬山也能和 Hollywood 标志合影的最佳机位。",
        photoTip: "坐在草坪上，用长焦镜头压缩背景，标志显得特别大。",
        isInstaWorthy: true,
        ticketInfo: "Free",
        coordinates: { lat: 34.1266, lng: -118.3265 }
      },
      {
        name: "Grand Park 跨年倒数",
        description: "LA 最大的免费跨年活动，市政厅会有 3D 投影倒数。",
        photoTip: "记录下 0 点时分人群欢呼和投影的瞬间。",
        isInstaWorthy: true,
        ticketInfo: "Free",
        coordinates: { lat: 34.0563, lng: -118.2464 }
      }
    ],
    hotels: [
      {
        name: "The Hollywood Roosevelt",
        category: "Luxury",
        priceRange: "$350+",
        rating: 4.5,
        description: "玛丽莲梦露住过的酒店，就在星光大道旁，复古派对氛围极佳。",
        bookingUrl: "https://www.google.com/search?q=The+Hollywood+Roosevelt+booking"
      },
      {
        name: "Loews Hollywood Hotel",
        category: "Comfort",
        priceRange: "$250 - $350",
        rating: 4.6,
        description: "位置极佳，就在杜比剧院隔壁，可以直接看到好莱坞标志。",
        bookingUrl: "https://www.google.com/search?q=Loews+Hollywood+Hotel+booking"
      }
    ]
  },
  {
    id: 3,
    date: "1月1日",
    title: "最美海岸线：圣巴巴拉",
    route: "LA -> Malibu -> Santa Barbara",
    shortDesc: "新年第一天，驶入全球最美的一号公路，打卡西班牙风情小镇。",
    description: "新年快乐！睡个懒觉吃个 Brunch，然后正式踏上一号公路。途径富人区马里布，最后抵达充满地中海风情的圣巴巴拉。",
    miles: 95,
    driveTime: "约 2 小时",
    mapQuery: "Stearns Wharf, Santa Barbara, CA",
    mainStops: [
      {
        name: "马里布海滩 (El Matador Beach)",
        description: "很多美剧取景地，这里有独特的海蚀洞和巨石。",
        photoTip: "站在海蚀洞里向外拍剪影，或者站在礁石上拍大片。",
        isInstaWorthy: true,
        ticketInfo: "Free (停车 $10)",
        coordinates: { lat: 34.0372, lng: -118.8744 }
      },
      {
        name: "圣巴巴拉法院 (County Courthouse)",
        description: "全美最美政府大楼，西班牙风格建筑。",
        photoTip: "登上钟楼塔顶，可以360度俯瞰红顶白墙的城市全景。",
        isInstaWorthy: true,
        ticketInfo: "Free",
        coordinates: { lat: 34.4241, lng: -119.7027 }
      },
      {
        name: "圣巴巴拉使命教堂 (Old Mission)",
        description: "加州十大教堂之首，粉色的双塔建筑。",
        photoTip: "教堂前的玫瑰园是绝佳前景。",
        isInstaWorthy: true,
        ticketInfo: "$15",
        coordinates: { lat: 34.4381, lng: -119.7135 }
      },
      {
        name: "斯特恩码头 (Stearns Wharf)",
        description: "加州最古老的木造码头，可以开车上去。",
        photoTip: "在码头尽头吃海胆，拍海鸥。",
        isInstaWorthy: false,
        ticketInfo: "Free",
        coordinates: { lat: 34.4103, lng: -119.6865 }
      }
    ],
    hotels: [
      {
        name: "Ritz-Carlton Bacara",
        category: "Luxury",
        priceRange: "$600 - $900",
        rating: 4.7,
        description: "圣巴巴拉顶奢度假村，拥有私人海滩，极度浪漫。",
        bookingUrl: "https://www.google.com/search?q=Ritz-Carlton+Bacara+booking"
      },
      {
        name: "Hotel Californian",
        category: "Luxury",
        priceRange: "$400 - $600",
        rating: 4.7,
        description: "就在海边，西班牙摩尔式建筑，拍照超级出片，紧邻 Funk Zone 酒庄区。",
        bookingUrl: "https://www.google.com/search?q=Hotel+Californian+booking"
      },
      {
        name: "Hotel Milo Santa Barbara",
        category: "Comfort",
        priceRange: "$200 - $300",
        rating: 4.2,
        description: "就在码头对面，经典的加州棕榈树风格，性价比很高。",
        bookingUrl: "https://www.google.com/search?q=Hotel+Milo+Santa+Barbara+booking"
      }
    ]
  },
  {
    id: 4,
    date: "1月2日",
    title: "童话小镇与粉色梦境",
    route: "Santa Barbara -> Solvang -> Pismo Beach -> SLO",
    shortDesc: "上午假装在丹麦，下午去喂鸵鸟，晚上住进粉红色的网红酒店。",
    description: "早上去丹麦村吃正宗的丹麦酥，打卡现实版的“鸵鸟乐园”，这不仅是自驾，更是一场色彩之旅。",
    miles: 90,
    driveTime: "约 1.5 小时",
    mapQuery: "Solvang, CA",
    mainStops: [
      {
        name: "丹麦村 (Solvang)",
        description: "加州的一块北欧飞地，满街的风车和姜饼屋。",
        photoTip: "穿浅色系衣服，在任何一个风车前合影都像是童话世界。",
        isInstaWorthy: true,
        ticketInfo: "Free",
        coordinates: { lat: 34.5958, lng: -120.1376 }
      },
      {
        name: "鸵鸟乐园 (OstrichLand USA)",
        description: "《辛普森一家》灵感来源地，可以近距离喂鸵鸟。",
        photoTip: "拿个簸箕喂鸵鸟，抓拍它们张大嘴的滑稽表情。",
        isInstaWorthy: true,
        ticketInfo: "$7",
        coordinates: { lat: 34.6083, lng: -120.1887 }
      },
      {
        name: "Oceano Dunes 沙丘",
        description: "一半沙漠一半海洋的神奇景观。",
        photoTip: "租一辆 ATV 沙滩车，拍摄冲沙的动感瞬间。",
        isInstaWorthy: true,
        ticketInfo: "Free (租车另付 $50+)",
        coordinates: { lat: 35.1065, lng: -120.6276 }
      },
      {
        name: "泡泡糖巷 (Bubblegum Alley)",
        description: "San Luis Obispo 的怪诞景点，满墙的泡泡糖。",
        photoTip: "虽然有点恶心，但确实很独特的打卡点。",
        isInstaWorthy: true,
        ticketInfo: "Free",
        coordinates: { lat: 35.2790, lng: -120.6635 }
      }
    ],
    hotels: [
      {
        name: "Madonna Inn",
        category: "Comfort",
        priceRange: "$200 - $350",
        rating: 4.5,
        description: "一定要住！全美最特别的网红酒店，110个房间每个主题都不同，粉色网球场必拍。",
        bookingUrl: "https://www.google.com/search?q=Madonna+Inn+booking"
      },
      {
        name: "Vespera Resort on Pismo Beach",
        category: "Luxury",
        priceRange: "$300 - $450",
        rating: 4.6,
        description: "万豪旗下傲途格精选，出门就是沙滩木栈道，非常惬意。",
        bookingUrl: "https://www.google.com/search?q=Vespera+Resort+Pismo+Beach+booking"
      },
      {
        name: "The Butler Hotel",
        category: "Budget",
        priceRange: "$150 - $220",
        rating: 4.4,
        description: "SLO 市中心的工业风精品酒店，由老车库改造，非常酷。",
        bookingUrl: "https://www.google.com/search?q=The+Butler+Hotel+SLO+booking"
      }
    ]
  },
  {
    id: 5,
    date: "1月3日",
    title: "大苏尔：人生必去清单",
    route: "Pismo Beach -> Big Sur -> Carmel",
    shortDesc: "一号公路的灵魂路段，悬崖、海浪与紫色沙滩。",
    description: "今天是一号公路的重头戏！大苏尔段路况险峻但景色绝美。请务必提前下载离线地图，因为大部分路段没有信号。",
    miles: 140,
    driveTime: "4 - 5 小时 (建议多预留停车拍照时间)",
    mapQuery: "Bixby Creek Bridge, Monterey, CA",
    mainStops: [
      {
        name: "麦克威瀑布 (McWay Falls)",
        description: "罕见的直接注入大海的瀑布，海水呈现出果冻般的蓝绿色。",
        photoTip: "不能下到沙滩，只能在观景台拍摄，建议带长焦。",
        isInstaWorthy: true,
        ticketInfo: "$10 (停车)",
        coordinates: { lat: 36.1579, lng: -121.6721 }
      },
      {
        name: "比克斯比大桥 (Bixby Creek Bridge)",
        description: "一号公路最经典的名片，无数汽车广告的取景地。",
        photoTip: "把车停在桥北侧的停车场，可以拍到桥梁和海岸线的完美弧度。",
        isInstaWorthy: true,
        ticketInfo: "Free",
        coordinates: { lat: 36.3715, lng: -121.9017 }
      },
      {
        name: "紫沙滩 (Pfeiffer Beach)",
        description: "世界上极少数的紫色沙滩，神秘而浪漫。还有著名的Keyhole Arch。",
        photoTip: "日落时阳光穿过Keyhole Arch的洞口，光芒万丈。",
        isInstaWorthy: true,
        ticketInfo: "$12 (现金)",
        coordinates: { lat: 36.2381, lng: -121.8157 }
      },
      {
        name: "Nepenthe 餐厅",
        description: "悬崖上的绝美景观餐厅，视野无敌。",
        photoTip: "点一杯咖啡坐在户外露台，背景就是太平洋。",
        isInstaWorthy: true,
        ticketInfo: "人均 $30+",
        coordinates: { lat: 36.2217, lng: -121.7610 }
      }
    ],
    hotels: [
      {
        name: "Post Ranch Inn",
        category: "Luxury",
        priceRange: "$1500+",
        rating: 4.8,
        description: "世界顶级悬崖酒店，没有电视和闹钟，只有太平洋的涛声，极度奢华。",
        bookingUrl: "https://www.google.com/search?q=Post+Ranch+Inn+booking"
      },
      {
        name: "Alila Ventana Big Sur",
        category: "Luxury",
        priceRange: "$2000+ (全包)",
        rating: 4.8,
        description: "凯悦旗下的顶级野奢，如果你有积分可以尝试兑换，体验极佳。",
        bookingUrl: "https://www.google.com/search?q=Alila+Ventana+Big+Sur+booking"
      },
      {
        name: "Big Sur Lodge",
        category: "Comfort",
        priceRange: "$250 - $400",
        rating: 4.1,
        description: "位于州立公园内，被红杉林包围的小木屋，性价比在大苏尔算很高的。",
        bookingUrl: "https://www.google.com/search?q=Big+Sur+Lodge+booking"
      }
    ]
  },
  {
    id: 6,
    date: "1月4日",
    title: "艺术卡梅尔与蓝色海湾",
    route: "Carmel -> 17 Mile Drive -> Monterey -> Santa Cruz",
    shortDesc: "从童话小镇卡梅尔出发，探访豪宅区的孤独柏树，遇见可爱的海獭。",
    description: "早起在卡梅尔小镇闲逛，这里没有门牌号，只有充满艺术气息的橱窗。下午去蒙特雷看海獭，最后抵达冲浪之都圣克鲁兹。",
    miles: 50,
    driveTime: "约 1.5 小时",
    mapQuery: "Carmel-by-the-Sea, CA",
    mainStops: [
      {
        name: "卡梅尔小镇 (Carmel-by-the-Sea)",
        description: "克林特·伊斯特伍德曾是这里的市长，充满艺术气息的欧式小镇。",
        photoTip: "拍摄那些像从童话书中搬出来的歪歪扭扭的小房子。",
        isInstaWorthy: true,
        ticketInfo: "Free",
        coordinates: { lat: 36.5552, lng: -121.9233 }
      },
      {
        name: "17英里 (17-Mile Drive)",
        description: "私人豪宅区里的景观路，有世界顶级的高尔夫球场。",
        photoTip: "孤独柏树 (The Lone Cypress) 必须打卡，阴天更有氛围感。",
        isInstaWorthy: true,
        ticketInfo: "$11.25 (每车)",
        coordinates: { lat: 36.5694, lng: -121.9652 }
      },
      {
        name: "蒙特雷湾水族馆 (Monterey Bay Aquarium)",
        description: "世界上最好的水族馆之一，可以直接看到海里的野生海獭。",
        photoTip: "巨大的海藻森林水族箱，拍摄剪影非常梦幻。",
        isInstaWorthy: true,
        ticketInfo: "$59.95",
        coordinates: { lat: 36.6183, lng: -121.9015 }
      },
      {
        name: "圣克鲁兹游乐园 (Santa Cruz Boardwalk)",
        description: "加州最古老的海滨游乐园，色彩斑斓。",
        photoTip: "拿着棉花糖在旋转木马或者彩色过山车前拍照。",
        isInstaWorthy: true,
        ticketInfo: "Free (项目另付)",
        coordinates: { lat: 36.9644, lng: -122.0181 }
      }
    ],
    hotels: [
      {
        name: "L'Auberge Carmel",
        category: "Luxury",
        priceRange: "$500 - $700",
        rating: 4.7,
        description: "罗兰夏朵旗下酒店，法式乡村风格，精致且服务极好。",
        bookingUrl: "https://www.google.com/search?q=L'Auberge+Carmel+booking"
      },
      {
        name: "InterContinental The Clement Monterey",
        category: "Comfort",
        priceRange: "$300 - $450",
        rating: 4.6,
        description: "就在罐头厂街，推窗见海，地理位置绝佳。",
        bookingUrl: "https://www.google.com/search?q=InterContinental+The+Clement+Monterey+booking"
      },
      {
        name: "Dream Inn Santa Cruz",
        category: "Comfort",
        priceRange: "$250 - $400",
        rating: 4.5,
        description: "所有房间都面朝大海，就在游乐园旁边，色彩明快。",
        bookingUrl: "https://www.google.com/search?q=Dream+Inn+Santa+Cruz+booking"
      }
    ]
  },
  {
    id: 7,
    date: "1月5日",
    title: "迷雾之城：旧金山",
    route: "Santa Cruz -> Golden Gate Bridge -> Fisherman's Wharf",
    shortDesc: "在离开前，看一眼那座红色的桥，吃一碗酸面包蛤蜊汤。",
    description: "旅程的最后一天。穿越硅谷，抵达旧金山。这座城市有着独特的坡道、叮当车和那座永远在雾中的金门大桥。",
    miles: 75,
    driveTime: "约 1.5 小时",
    mapQuery: "Golden Gate Bridge, San Francisco, CA",
    mainStops: [
      {
        name: "金门大桥 (Battery Spencer)",
        description: "拍摄金门大桥最震撼的角度，背景是整个旧金山天际线。",
        photoTip: "风很大！头发会乱！建议戴帽子或扎头发。这里能拍出大桥的气势。",
        isInstaWorthy: true,
        ticketInfo: "Free",
        coordinates: { lat: 37.8277, lng: -122.4816 }
      },
      {
        name: "艺术宫 (Palace of Fine Arts)",
        description: "1915年巴拿马万国博览会遗址，古罗马废墟风格。",
        photoTip: "在圆顶建筑下拍摄，或者在湖对面拍摄倒影。",
        isInstaWorthy: true,
        ticketInfo: "Free",
        coordinates: { lat: 37.8029, lng: -122.4484 }
      },
      {
        name: "恶魔岛 (Alcatraz Island)",
        description: "传说中的海上监狱，可以乘船登岛参观。",
        photoTip: "拍摄监狱内部的光影，很有电影质感。",
        isInstaWorthy: true,
        ticketInfo: "$45.25 (需提前3个月订)",
        coordinates: { lat: 37.8270, lng: -122.4230 }
      },
      {
        name: "彩绘女士 (Painted Ladies)",
        description: "六栋维多利亚式的老房子，不仅是建筑，更是历史。",
        photoTip: "在阿拉莫广场 (Alamo Square) 的草坡上野餐，以前景草地拍摄房子。",
        isInstaWorthy: true,
        ticketInfo: "Free",
        coordinates: { lat: 37.7762, lng: -122.4328 }
      }
    ],
    hotels: [
      {
        name: "1 Hotel San Francisco",
        category: "Luxury",
        priceRange: "$400 - $600",
        rating: 4.6,
        description: "就在轮渡大厦对面，设计感超强，依然是环保绿植风。",
        bookingUrl: "https://www.google.com/search?q=1+Hotel+San+Francisco+booking"
      },
      {
        name: "CitizenM San Francisco",
        category: "Comfort",
        priceRange: "$180 - $250",
        rating: 4.5,
        description: "联合广场附近的摩登酒店，房间虽小但科技感十足，大堂很适合办公。",
        bookingUrl: "https://www.google.com/search?q=CitizenM+San+Francisco+booking"
      },
      {
        name: "Fairmont San Francisco",
        category: "Luxury",
        priceRange: "$450+",
        rating: 4.6,
        description: "诺布山顶的经典酒店，这里可以看到最美的旧金山全景。",
        bookingUrl: "https://www.google.com/search?q=Fairmont+San+Francisco+booking"
      }
    ]
  }
];

export const ITINERARY_DATA_EN: ItineraryDay[] = [
  {
    id: 1,
    date: "Dec 30",
    title: "City of Angels & Art Sunset",
    route: "LAX -> The Broad -> Beverly Hills -> Santa Monica",
    shortDesc: "Arrive in LA, visit viral museums, and catch an epic sunset at the end of Route 66.",
    description: "Welcome to LA! Today is relaxed. Visit the hottest contemporary art museum in the morning, experience the luxury of Beverly Hills in the afternoon, and head to Santa Monica Pier for sunset.",
    miles: 25,
    driveTime: "Approx 1 hr (Expect LA Traffic)",
    mapQuery: "Santa Monica Pier, Santa Monica, CA",
    mainStops: [
      {
        name: "The Broad Museum",
        description: "LA's hottest museum. Yayoi Kusama's Infinity Mirror Rooms are a must.",
        photoTip: "Take photos under the giant table and chairs upstairs, or street shots in front of the white honeycomb veil.",
        isInstaWorthy: true,
        ticketInfo: "Free (Reserve in advance)",
        coordinates: { lat: 34.0545, lng: -118.2502 }
      },
      {
        name: "LACMA (Urban Light)",
        description: "An installation of 202 restored street lamps. incredibly romantic at night.",
        photoTip: "Stand in the middle of the lamps for symmetry. Must go at night!",
        isInstaWorthy: true,
        ticketInfo: "Free (Outdoors)",
        coordinates: { lat: 34.0619, lng: -118.3585 }
      },
      {
        name: "Santa Monica Pier",
        description: "The end of Route 66, featuring Pacific Park.",
        photoTip: "Silhouette shots of the Ferris wheel at sunset, or play with shadows under the pier.",
        isInstaWorthy: true,
        ticketInfo: "Free (Rides extra)",
        coordinates: { lat: 34.0104, lng: -118.4960 }
      },
      {
        name: "The Getty Center",
        description: "White architectural marvel on the hill overlooking all of Los Angeles.",
        photoTip: "Geometric shots of the white architecture against blue sky.",
        isInstaWorthy: true,
        ticketInfo: "Free (Parking $20)",
        coordinates: { lat: 34.0780, lng: -118.4741 }
      }
    ],
    hotels: [
      {
        name: "1 Hotel West Hollywood",
        category: "Luxury",
        priceRange: "$450 - $600",
        rating: 4.8,
        description: "Influencer favorite. Eco-luxury with an unbeatable rooftop pool view of LA.",
        bookingUrl: "https://www.google.com/search?q=1+Hotel+West+Hollywood+booking"
      },
      {
        name: "The Line Hotel LA",
        category: "Comfort",
        priceRange: "$200 - $300",
        rating: 4.4,
        description: "Located in K-Town, industrial design, floor-to-ceiling windows with Hollywood sign views.",
        bookingUrl: "https://www.google.com/search?q=The+Line+Hotel+LA+booking"
      },
      {
        name: "Freehand Los Angeles",
        category: "Budget",
        priceRange: "$80 - $150",
        rating: 4.3,
        description: "Design-forward hostel/hotel blend. Famous rooftop pool bar.",
        bookingUrl: "https://www.google.com/search?q=Freehand+Los+Angeles+booking"
      }
    ]
  },
  {
    id: 2,
    date: "Dec 31",
    title: "Hollywood Dreams & NYE",
    route: "Universal Studios -> Hollywood Sign -> Grand Park",
    shortDesc: "A full day at Universal Studios, followed by a massive NYE countdown.",
    description: "If you love movies, today is your day. Super Nintendo World and Harry Potter by day, La La Land views at Griffith by dusk, and NYE partying at night!",
    miles: 30,
    driveTime: "Approx 1.5 hrs",
    mapQuery: "Griffith Observatory, Los Angeles, CA",
    mainStops: [
      {
        name: "Universal Studios Hollywood",
        description: "Super Nintendo World and Wizarding World are musts. The Studio Tour is unique to LA.",
        photoTip: "Butterbeer selfie in front of Hogwarts, or vibrant colors in Mario World.",
        isInstaWorthy: true,
        ticketInfo: "$109 - $150",
        coordinates: { lat: 34.1381, lng: -118.3534 }
      },
      {
        name: "Griffith Observatory",
        description: "La La Land filming location. Best spot for LA night views.",
        photoTip: "Arrive before sunset for pink skies and city lights turning on.",
        isInstaWorthy: true,
        ticketInfo: "Free (Planetarium $10)",
        coordinates: { lat: 34.1184, lng: -118.3004 }
      },
      {
        name: "Lake Hollywood Park",
        description: "Best spot to snap the Hollywood Sign without hiking.",
        photoTip: "Sit on the grass and use a telephoto lens to compress the background.",
        isInstaWorthy: true,
        ticketInfo: "Free",
        coordinates: { lat: 34.1266, lng: -118.3265 }
      },
      {
        name: "Grand Park NYE",
        description: "LA's biggest free NYE event with 3D projections on City Hall.",
        photoTip: "Capture the moment of the countdown and crowd energy.",
        isInstaWorthy: true,
        ticketInfo: "Free",
        coordinates: { lat: 34.0563, lng: -118.2464 }
      }
    ],
    hotels: [
      {
        name: "The Hollywood Roosevelt",
        category: "Luxury",
        priceRange: "$350+",
        rating: 4.5,
        description: "Marilyn Monroe lived here. Right on Walk of Fame. Great retro party vibes.",
        bookingUrl: "https://www.google.com/search?q=The+Hollywood+Roosevelt+booking"
      },
      {
        name: "Loews Hollywood Hotel",
        category: "Comfort",
        priceRange: "$250 - $350",
        rating: 4.6,
        description: "Perfect location next to Dolby Theatre with views of the Hollywood Sign.",
        bookingUrl: "https://www.google.com/search?q=Loews+Hollywood+Hotel+booking"
      }
    ]
  },
  {
    id: 3,
    date: "Jan 1",
    title: "Pacific Coast: Santa Barbara",
    route: "LA -> Malibu -> Santa Barbara",
    shortDesc: "First day of the year, driving the world's most beautiful highway to the American Riviera.",
    description: "Happy New Year! Grab brunch, then hit Highway 1. Pass through Malibu's celebrity homes and arrive in Mediterranean-style Santa Barbara.",
    miles: 95,
    driveTime: "Approx 2 hrs",
    mapQuery: "Stearns Wharf, Santa Barbara, CA",
    mainStops: [
      {
        name: "El Matador Beach (Malibu)",
        description: "Featured in many movies. Unique sea caves and massive rocks.",
        photoTip: "Silhouette shots from inside the sea caves looking out.",
        isInstaWorthy: true,
        ticketInfo: "Free (Parking $10)",
        coordinates: { lat: 34.0372, lng: -118.8744 }
      },
      {
        name: "Santa Barbara Courthouse",
        description: "Most beautiful government building in the US. Spanish style.",
        photoTip: "Climb the clock tower for a 360-degree view of red roofs and white walls.",
        isInstaWorthy: true,
        ticketInfo: "Free",
        coordinates: { lat: 34.4241, lng: -119.7027 }
      },
      {
        name: "Old Mission Santa Barbara",
        description: "Queen of the Missions. Iconic pink twin-tower architecture.",
        photoTip: "The rose garden in front makes a perfect foreground.",
        isInstaWorthy: true,
        ticketInfo: "$15",
        coordinates: { lat: 34.4381, lng: -119.7135 }
      },
      {
        name: "Stearns Wharf",
        description: "Oldest working wood wharf in California. You can drive on it.",
        photoTip: "Eat sea urchin at the end of the pier and watch seagulls.",
        isInstaWorthy: false,
        ticketInfo: "Free",
        coordinates: { lat: 34.4103, lng: -119.6865 }
      }
    ],
    hotels: [
      {
        name: "Ritz-Carlton Bacara",
        category: "Luxury",
        priceRange: "$600 - $900",
        rating: 4.7,
        description: "Top luxury resort with private beaches. Extremely romantic.",
        bookingUrl: "https://www.google.com/search?q=Ritz-Carlton+Bacara+booking"
      },
      {
        name: "Hotel Californian",
        category: "Luxury",
        priceRange: "$400 - $600",
        rating: 4.7,
        description: "Right by the sea, Spanish Moorish style. Next to the Funk Zone wineries.",
        bookingUrl: "https://www.google.com/search?q=Hotel+Californian+booking"
      },
      {
        name: "Hotel Milo Santa Barbara",
        category: "Comfort",
        priceRange: "$200 - $300",
        rating: 4.2,
        description: "Classic California palm tree vibes right opposite the pier. Good value.",
        bookingUrl: "https://www.google.com/search?q=Hotel+Milo+Santa+Barbara+booking"
      }
    ]
  },
  {
    id: 4,
    date: "Jan 2",
    title: "Fairytales & Pink Dreams",
    route: "Santa Barbara -> Solvang -> Pismo Beach -> SLO",
    shortDesc: "Denmark in the morning, feeding ostriches at noon, and a pink hotel at night.",
    description: "Eat Danish pastries in Solvang, visit the real-life 'Ostrich Land', and end the day in a colorful journey.",
    miles: 90,
    driveTime: "Approx 1.5 hrs",
    mapQuery: "Solvang, CA",
    mainStops: [
      {
        name: "Solvang",
        description: "A Nordic enclave in California. Windmills and gingerbread houses everywhere.",
        photoTip: "Wear light colors. Any windmill background looks like a fairytale.",
        isInstaWorthy: true,
        ticketInfo: "Free",
        coordinates: { lat: 34.5958, lng: -120.1376 }
      },
      {
        name: "OstrichLand USA",
        description: "Inspiration for The Simpsons. Feed ostriches up close.",
        photoTip: "Use the dustpan to feed them and capture their funny expressions.",
        isInstaWorthy: true,
        ticketInfo: "$7",
        coordinates: { lat: 34.6083, lng: -120.1887 }
      },
      {
        name: "Oceano Dunes",
        description: "Magical landscape where desert meets ocean.",
        photoTip: "Rent an ATV for dynamic action shots on the dunes.",
        isInstaWorthy: true,
        ticketInfo: "Free (ATV rental $50+)",
        coordinates: { lat: 35.1065, lng: -120.6276 }
      },
      {
        name: "Bubblegum Alley",
        description: "Quirky spot in San Luis Obispo. Walls covered in gum.",
        photoTip: "A bit gross, but definitely a unique photo op.",
        isInstaWorthy: true,
        ticketInfo: "Free",
        coordinates: { lat: 35.2790, lng: -120.6635 }
      }
    ],
    hotels: [
      {
        name: "Madonna Inn",
        category: "Comfort",
        priceRange: "$200 - $350",
        rating: 4.5,
        description: "Must stay! 110 unique themed rooms. The pink tennis court is iconic.",
        bookingUrl: "https://www.google.com/search?q=Madonna+Inn+booking"
      },
      {
        name: "Vespera Resort on Pismo Beach",
        category: "Luxury",
        priceRange: "$300 - $450",
        rating: 4.6,
        description: "Marriott Autograph Collection. Right on the boardwalk. Very relaxing.",
        bookingUrl: "https://www.google.com/search?q=Vespera+Resort+Pismo+Beach+booking"
      },
      {
        name: "The Butler Hotel",
        category: "Budget",
        priceRange: "$150 - $220",
        rating: 4.4,
        description: "Industrial chic boutique hotel in downtown SLO. Converted garage.",
        bookingUrl: "https://www.google.com/search?q=The+Butler+Hotel+SLO+booking"
      }
    ]
  },
  {
    id: 5,
    date: "Jan 3",
    title: "Big Sur: Bucket List",
    route: "Pismo Beach -> Big Sur -> Carmel",
    shortDesc: "The soul of Highway 1. Cliffs, waves, and purple sand.",
    description: "The highlight of the trip! Big Sur is rugged and beautiful. Download offline maps as there is no signal.",
    miles: 140,
    driveTime: "4 - 5 hrs (Allow time for stops)",
    mapQuery: "Bixby Creek Bridge, Monterey, CA",
    mainStops: [
      {
        name: "McWay Falls",
        description: "Rare tidefall that empties directly into the ocean. Turquoise waters.",
        photoTip: "View from the trail above. Telephoto lens recommended.",
        isInstaWorthy: true,
        ticketInfo: "$10 (Parking)",
        coordinates: { lat: 36.1579, lng: -121.6721 }
      },
      {
        name: "Bixby Creek Bridge",
        description: "The postcard of Highway 1. Featured in countless car commercials.",
        photoTip: "Park on the north side for the perfect curve of the bridge and coast.",
        isInstaWorthy: true,
        ticketInfo: "Free",
        coordinates: { lat: 36.3715, lng: -121.9017 }
      },
      {
        name: "Pfeiffer Beach",
        description: "One of the few purple sand beaches in the world. Keyhole Arch is here.",
        photoTip: "Sunset light beaming through Keyhole Arch is spectacular.",
        isInstaWorthy: true,
        ticketInfo: "$12 (Cash)",
        coordinates: { lat: 36.2381, lng: -121.8157 }
      },
      {
        name: "Nepenthe",
        description: "Restaurant on a cliff with unbeatable views.",
        photoTip: "Have coffee on the terrace with the Pacific Ocean as your backdrop.",
        isInstaWorthy: true,
        ticketInfo: "$30+ pp",
        coordinates: { lat: 36.2217, lng: -121.7610 }
      }
    ],
    hotels: [
      {
        name: "Post Ranch Inn",
        category: "Luxury",
        priceRange: "$1500+",
        rating: 4.8,
        description: "Top tier cliffside hotel. No TV, just ocean sounds. Ultra luxury.",
        bookingUrl: "https://www.google.com/search?q=Post+Ranch+Inn+booking"
      },
      {
        name: "Alila Ventana Big Sur",
        category: "Luxury",
        priceRange: "$2000+ (All Inclusive)",
        rating: 4.8,
        description: "Hyatt's top luxury brand. Great redemption if you have points.",
        bookingUrl: "https://www.google.com/search?q=Alila+Ventana+Big+Sur+booking"
      },
      {
        name: "Big Sur Lodge",
        category: "Comfort",
        priceRange: "$250 - $400",
        rating: 4.1,
        description: "Cabins inside the state park surrounded by redwoods. Good value for Big Sur.",
        bookingUrl: "https://www.google.com/search?q=Big+Sur+Lodge+booking"
      }
    ]
  },
  {
    id: 6,
    date: "Jan 4",
    title: "Artistic Carmel & Blue Bay",
    route: "Carmel -> 17 Mile Drive -> Monterey -> Santa Cruz",
    shortDesc: "Fairytale cottages in Carmel, the Lone Cypress, and cute sea otters.",
    description: "Explore Carmel in the morning - no street numbers, just art. Visit otters in Monterey, then surf city Santa Cruz.",
    miles: 50,
    driveTime: "Approx 1.5 hrs",
    mapQuery: "Carmel-by-the-Sea, CA",
    mainStops: [
      {
        name: "Carmel-by-the-Sea",
        description: "Clint Eastwood was mayor here. European style village with artistic vibes.",
        photoTip: "Photograph the crooked fairytale cottages.",
        isInstaWorthy: true,
        ticketInfo: "Free",
        coordinates: { lat: 36.5552, lng: -121.9233 }
      },
      {
        name: "17-Mile Drive",
        description: "Scenic road through mansions and golf courses.",
        photoTip: "The Lone Cypress is iconic. Moody weather adds atmosphere.",
        isInstaWorthy: true,
        ticketInfo: "$11.25 (per car)",
        coordinates: { lat: 36.5694, lng: -121.9652 }
      },
      {
        name: "Monterey Bay Aquarium",
        description: "One of the world's best. See wild sea otters from the deck.",
        photoTip: "The giant kelp forest tank is mesmerizing for silhouettes.",
        isInstaWorthy: true,
        ticketInfo: "$59.95",
        coordinates: { lat: 36.6183, lng: -121.9015 }
      },
      {
        name: "Santa Cruz Boardwalk",
        description: "Oldest amusement park in California. Very colorful.",
        photoTip: "Cotton candy photos in front of the carousel or colorful coasters.",
        isInstaWorthy: true,
        ticketInfo: "Free (Rides extra)",
        coordinates: { lat: 36.9644, lng: -122.0181 }
      }
    ],
    hotels: [
      {
        name: "L'Auberge Carmel",
        category: "Luxury",
        priceRange: "$500 - $700",
        rating: 4.7,
        description: "Relais & Châteaux property. French country style, exquisite service.",
        bookingUrl: "https://www.google.com/search?q=L'Auberge+Carmel+booking"
      },
      {
        name: "InterContinental The Clement Monterey",
        category: "Comfort",
        priceRange: "$300 - $450",
        rating: 4.6,
        description: "Right on Cannery Row. Ocean views. Excellent location.",
        bookingUrl: "https://www.google.com/search?q=InterContinental+The+Clement+Monterey+booking"
      },
      {
        name: "Dream Inn Santa Cruz",
        category: "Comfort",
        priceRange: "$250 - $400",
        rating: 4.5,
        description: "All rooms face the ocean. Right next to the boardwalk. Retro chic.",
        bookingUrl: "https://www.google.com/search?q=Dream+Inn+Santa+Cruz+booking"
      }
    ]
  },
  {
    id: 7,
    date: "Jan 5",
    title: "City of Fog: San Francisco",
    route: "Santa Cruz -> Golden Gate Bridge -> Fisherman's Wharf",
    shortDesc: "See the red bridge, eat clam chowder, and say goodbye.",
    description: "Last day. Drive through Silicon Valley to SF. Steep streets, cable cars, and the bridge forever in fog.",
    miles: 75,
    driveTime: "Approx 1.5 hrs",
    mapQuery: "Golden Gate Bridge, San Francisco, CA",
    mainStops: [
      {
        name: "Golden Gate Bridge (Battery Spencer)",
        description: "Most dramatic angle of the bridge with the city skyline.",
        photoTip: "It's windy! Hold your hat. Shows the massive scale of the bridge.",
        isInstaWorthy: true,
        ticketInfo: "Free",
        coordinates: { lat: 37.8277, lng: -122.4816 }
      },
      {
        name: "Palace of Fine Arts",
        description: "Ruins from the 1915 Expo. Roman style architecture.",
        photoTip: "Under the rotunda or reflection across the lagoon.",
        isInstaWorthy: true,
        ticketInfo: "Free",
        coordinates: { lat: 37.8029, lng: -122.4484 }
      },
      {
        name: "Alcatraz Island",
        description: "Infamous island prison. Take a ferry to visit.",
        photoTip: "Light and shadow inside the prison blocks are cinematic.",
        isInstaWorthy: true,
        ticketInfo: "$45.25 (Book 3 mo early)",
        coordinates: { lat: 37.8270, lng: -122.4230 }
      },
      {
        name: "Painted Ladies",
        description: "Six Victorian houses. Iconic architecture history.",
        photoTip: "Picnic on Alamo Square grass and shoot the houses with city background.",
        isInstaWorthy: true,
        ticketInfo: "Free",
        coordinates: { lat: 37.7762, lng: -122.4328 }
      }
    ],
    hotels: [
      {
        name: "1 Hotel San Francisco",
        category: "Luxury",
        priceRange: "$400 - $600",
        rating: 4.6,
        description: "Opposite Ferry Building. Eco-design and greenery everywhere.",
        bookingUrl: "https://www.google.com/search?q=1+Hotel+San+Francisco+booking"
      },
      {
        name: "CitizenM San Francisco",
        category: "Comfort",
        priceRange: "$180 - $250",
        rating: 4.5,
        description: "Modern hotel near Union Square. Small high-tech rooms, great lobby for work.",
        bookingUrl: "https://www.google.com/search?q=CitizenM+San+Francisco+booking"
      },
      {
        name: "Fairmont San Francisco",
        category: "Luxury",
        priceRange: "$450+",
        rating: 4.6,
        description: "Classic luxury atop Nob Hill. Best panoramic views of SF.",
        bookingUrl: "https://www.google.com/search?q=Fairmont+San+Francisco+booking"
      }
    ]
  }
];
