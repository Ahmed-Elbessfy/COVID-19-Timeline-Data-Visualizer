import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

const messages = {
    'en': {
        pageTitle: "COVID-19 Realtime Data Visualization and Timeline",
        title: "Realtime Data Tracking<br>& Timeline",
        subtitles: {
            today: "Today Overview",
            country: "Country Overview",
            nearby: "Cases Near Me",
            confirmAndDeath: "Cumulative Cases",
            newDeaths: "New Cases",
            rates: "Death Rate and Recover Rate",
            historyAnimation: "Confirmed Cases Animation",
            regionList: "Region List",
            source: "Source",
            about: "About",
            map: "Confirmed Cases Map",
            ratio: "Ratio Animation",
            timeMachine: "Time Machine",
            countryCompare: "Country and Region Analysis"
        },
        tmHint: "Drag the slider to view historical data",
        tmSticky: "Viewing historical data",
        tmRevert: "Revert",
        totalConfirmed: "Confirmed",
        totalDeaths: "Deaths",
        totalTests: "Tested",
        totalCured: "Recovered",
        negative: "Negative",
        active: "Active",
        england: "England",
        scotland: "Scotland",
        wales: "Wales",
        nIreland: "N. Ireland",
        nav: {
            current: "Current",
            animation: "Animations",
            map: "Regional"
        },
        newCases: "New Cases",
        newDeaths: "New Deaths",
        deathRate: "Death Rate",
        cureRate: "Cure Rate",
        chartTimes: {
            oneWeek: "7 Days",
            twoWeek: "14 Days",
            oneMonth: "31 Days",
            all: "All Data",
        },
        nearBy: {
            default: "Search cases in NHS region by postcode, or tap the left-side icon to locate.",
            postcodeErr: "Sorry, the UK postcode your entered is invalid.",
            result: `Currently, there are<span>{1}</span>confirmed cases in<span>{0}</span>, with a change of <span>{2}</span> cases，it is ranked No.<span>{3}</span> in all NHS regions.`,
            notFound: `Sorry, we cannot find any data on <span>{0}</span>`,
            locating: "Locating, please wait...",
            notUk: "Sorry, but we cannot locate you onto an UK region.",
            rejected: "Sorry, but you have denied the GPS permission.",
            unsupported: "Sorry, Geolocation is not supported by this browser.",
            search: "Search"
        },
        barRace: {
            global: "Global",
            local: "Country",
            globalTitle: "Global History",
            localTitle: "Region History",
            unit: "Confirmed Cases"
        },
        table: {
            default: "Sort by",
            byRegion: "Region",
            byCases:"Cases",
            byChanges:"Changes",
            region: "Region",
            cases:"Confirmed",
            changes:"Changes",
            showAll: "Show All",
            showLess: "Show Less"
        },
        selector:{
            uk: "🇬🇧 UK Realtime",
            us: "🇺🇸 US Realtime",
            world: "🌎 Worldwide"
        },
        compareNote: "Data is aligned by the date when confirmed cases reaches 50 in each region",
        compareSelect: "Select any countries below to add for comparision",
        dataSwitch:{
            confirmed: "Confirmed Cases",
            active: "Active Cases",
            death: "Death Toll",
            dRate: "Death Rate",
            cured: "Recovered Cases",
            cRate: "Recover Rate"
        }
    },
    'zh': {
        pageTitle: "COVID-19 实时疫情数据跟踪 - UCLCSSA 中国学联",
        title: "实时数据动态",
        subtitles: {
            today: "今日概览",
            country: "国家概览",
            nearby: "查询周边确诊",
            confirmAndDeath: "确诊及死亡",
            newDeaths: "新增确诊及死亡",
            rates: "死亡率及治愈率",
            historyAnimation: "历史确诊数据动画",
            regionList: "地域确诊列表",
            source: "数据来源",
            about: "关于",
            map: "英国地区确诊地图",
            ratio: "人数占比",
            timeMachine: "时光机",
            countryCompare: "国家和地区数据分析"
        },
        tmHint: "滑动进度条以查看历史数据",
        tmSticky: "正在查看历史数据",
        tmRevert: "回到今日",
        totalConfirmed: "累计确诊",
        totalDeaths: "累计死亡",
        totalTests: "累计测试",
        totalCured: "累计治愈",
        negative: "测试阴性",
        active: "现存确诊",
        england: "英格兰",
        scotland: "苏格兰",
        wales: "威尔士",
        nIreland: "北爱尔兰",
        nav: {
            current: "当前数据",
            animation: "历史动画",
            map: "地区概况"
        },
        newCases: "新增确诊",
        newDeaths: "新增死亡",
        deathRate: "死亡率",
        cureRate: "治愈率",
        chartTimes: {
            oneWeek: "一周内",
            twoWeek: "两周内",
            oneMonth: "一个月内",
            all: "全部数据",
        },
        nearBy: {
            default: "输入您的英国邮编即可查询最近的区域确诊数量，点击左侧按钮可以自动定位。",
            postcodeErr: "抱歉，您输入的邮编有误",
            result: `目前，<span>{0}</span>区共有<span>{1}</span>例确诊，相较上次变化<span>{2}</span>例，在NHS地区中排名第<span>{3}</span>。`,
            notFound: `抱歉，我们无法找到<span>{0}</span>的相关信息`,
            locating: "定位中，请稍候...",
            notUk: "很抱歉，我们无法定位您到英国的地区",
            rejected: "很抱歉，我们无法定位，因为您已拒绝位置授权",
            unsupported: "很抱歉，您的浏览器不支持定位",
            search: "查询"
        },
        barRace: {
            global: "全球",
            local: "本地",
            globalTitle: "全球确诊数据",
            localTitle: "国家确诊数据",
            unit: "确诊人数（例）"
        },
        table: {
            default: "默认排序",
            byRegion: "按地区",
            byCases:"按人数",
            byChanges:"按变化",
            region: "地区",
            cases: "确诊人数",
            changes: "较上次",
            showAll: "显示全部",
            showLess: "收起"
        },
        selector:{
            uk: "🇬🇧英国实时数据",
            us: "🇺🇸美国实时数据",
            world: "🌎世界实时数据"
        },
        compareNote: "数据以国家确诊首次超过50例作为起点对齐",
        compareSelect: "从下列输入框可选择其他任何国家进行对比"
    }
};

// eslint-disable-next-line no-unused-vars
export const i18n = new VueI18n({
    locale: navigator.language.split('-')[0], // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
});