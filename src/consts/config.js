import {Tag} from "antd";

export const CONFIG = {
    // URL: 'http://47.112.32.195:7777',
    URL: 'http://localhost:7777',
    // URL: '',
    ICONFONT: '//at.alicdn.com/t/font_915840_m8k93s2vw3.js',
    ROLE: {
        0: 'user',
        1: 'admin',
        2: 'superAdmin',
    },
    EDITOR_THEME: ["material-one-dark", 'atom-one-dark', 'vs-dark', 'ambiance', 'chrome', 'dracula', 'eclipse', 'github', 'merbivore', 'merbivore_soft', 'monokai', 'terminal', 'xcode'],
    PIC_URL: 'https://cdn.pity.fun/',
    PROJECT_ROLE: {
        OWNER: '负责人',
        ADMIN: '组长',
        MEMBER: '组员',
    },
    PROJECT_ROLE_TO_ID: {
        OWNER: '2',
        MEMBER: '0',
        ADMIN: '1',
    },
    PROJECT_TAG: {
        OWNER: 'purple',
        MEMBER: 'pink',
    },
    PROJECT_ROLE_MAP: {
        1: '组长',
        0: '组员',
        // 2: "负责人"
    },
    PRIORITY: ['P0', 'P1', 'P2', 'P3', 'P4'],
    ASSERT_TYPE: {
        'equal': '等于',
        'not_equal': '不等于',
        'in': '属于',
    },
    ASSERT_TYPE_TAG: {
        'equal': <Tag color="success">等于</Tag>,
        'not_equal': <Tag color="danger">不等于</Tag>,
        'in': <Tag color="blue">被包含</Tag>,
    },
    // 用例状态
    CASE_STATUS: {
        1: '调试中',
        2: '暂时关闭',
        3: '正常运行',
    },
    REQUEST_TYPE: {
        1: 'Http',
        2: 'Grpc',
        3: 'Dubbo',
    },
    REQUEST_TYPE_TAG: {
        1: <Tag color="success">HTTP</Tag>,
        2: <Tag color="orange">GRPC</Tag>,
        3: <Tag color="blue">DUBBO</Tag>,
    },
    CASE_TAG: {
        'P0': 'magenta',
        'P1': 'red',
        'P2': 'volcano',
        'P3': 'orange',
        'P4': 'green',
    },
    CASE_CONSTRUCTOR: {
        0: '测试用例',
        1: 'SQL',
        2: 'Redis',
        3: '其他'
    },
    CASE_CONSTRUCTOR_COLOR: {
        0: 'success',
        1: 'blue',
        2: 'danger',
        3: 'grey'
    },
    CASE_BADGE: {
        1: {
            status: 'processing',
            text: '调试中',
        },
        2: {
            status: 'default',
            text: '暂时关闭',
        },
        3: {
            status: 'success',
            text: '正常运行',
        },
    },
    SQL_TYPE: {
        0: 'MySQL',
        1: 'Postgresql'
    },
    DEFAULT_AVATAR:
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Frecom%2F2015%2F11%2F24%2F144832579376786755.jpeg&refer=http%3A%2F%2Fn1.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620401980&t=9ee0f5e56b90bb80cfde8f7cc81c81ae',
};
