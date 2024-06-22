// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

export const CATEGORIES_TO_KEEP = {
    ADVANCED_SETTINGS: 'advanced_settings',
    CHANNEL_APPROXIMATE_VIEW_TIME: 'channel_approximate_view_time',
    CHANNEL_OPEN_TIME: 'channel_open_time',
    DIRECT_CHANNEL_SHOW: 'direct_channel_show',
    GROUP_CHANNEL_SHOW: 'group_channel_show',
    DISPLAY_SETTINGS: 'display_settings',
    EMOJI: 'emoji',
    NOTIFICATIONS: 'notifications',
    SAVED_POST: 'flagged_post',
    SIDEBAR_SETTINGS: 'sidebar_settings',
    TEAMS_ORDER: 'teams_order',
    THEME: 'theme',
    SYSTEM_NOTICE: 'system_notice',
};

const CATEGORIES = {
    ...CATEGORIES_TO_KEEP,
    FAVORITE_CHANNEL: 'favorite_channel',
};

const NOTICES = {
    GM_AS_DM: 'GMasDM',
};

const Preferences = {
    CATEGORIES,
    NOTICES,
    COLLAPSED_REPLY_THREADS: 'collapsed_reply_threads',
    COLLAPSED_REPLY_THREADS_OFF: 'off',
    COLLAPSED_REPLY_THREADS_ON: 'on',
    COMMENTS: 'comments',
    COMMENTS_ANY: 'any',
    COMMENTS_ROOT: 'root',
    COMMENTS_NEVER: 'never',
    EMAIL: 'email',
    EMAIL_INTERVAL: 'email_interval',
    INTERVAL_FIFTEEN_MINUTES: 15 * 60,
    INTERVAL_HOUR: 60 * 60,
    INTERVAL_IMMEDIATE: 30,

    // "immediate" is a 30 second interval
    INTERVAL_NEVER: 0,
    INTERVAL_NOT_SET: -1,
    NAME_NAME_FORMAT: 'name_format',
    DISPLAY_PREFER_NICKNAME: 'nickname_full_name',
    DISPLAY_PREFER_FULL_NAME: 'full_name',
    DISPLAY_PREFER_USERNAME: 'username',
    EMOJI_SKINTONE: 'emoji_skintone',
    LINK_PREVIEW_DISPLAY: 'link_previews',
    MENTION_KEYS: 'mention_keys',
    USE_MILITARY_TIME: 'use_military_time',
    CHANNEL_SIDEBAR_ORGANIZATION: 'channel_sidebar_organization',
    CHANNEL_SIDEBAR_LIMIT_DMS: 'limit_visible_dms_gms',
    CHANNEL_SIDEBAR_LIMIT_DMS_DEFAULT: 20,
    CHANNEL_SIDEBAR_GROUP_UNREADS: 'show_unread_section',
    AUTOCLOSE_DMS_ENABLED: 'after_seven_days',
    ADVANCED_FILTER_JOIN_LEAVE: 'join_leave',
    ADVANCED_CODE_BLOCK_ON_CTRL_ENTER: 'code_block_ctrl_enter',
    ADVANCED_SEND_ON_CTRL_ENTER: 'send_on_ctrl_enter',
    THEMES: {
        parolla: {
            type: 'Parolla',
            sidebarBg: "#f8f7ff",
            sidebarText: "#090a0b",
            sidebarUnreadText: "#2d3039",
            sidebarTextHoverBg: "#ebebed",
            sidebarTextActiveBorder: "#b8b8ff",
            sidebarTextActiveColor: "#2d3039",
            sidebarHeaderBg: "#f5f4f9",
            sidebarHeaderTextColor: "#2d3039",
            sidebarTeamBarBg: "#f5f4f9",
            onlineIndicator: "#3db887",
            awayIndicator: "#f5ab07",
            dndIndicator: "#d24b4e",
            mentionBg: "#9381ff",
            mentionColor: "#ffffff",
            centerChannelBg: "#ffffff",
            centerChannelColor: "#3f4350",
            newMessageSeparator: "#ffeedd",
            linkColor: "#9381ff",
            buttonBg: "#9381ff",
            buttonColor: "#ffffff",
            errorTextColor: "#d24b4e",
            mentionHighlightBg: "#b8b8ff",
            mentionHighlightLink: "#ffd8be",
            codeTheme: "github"
        },
        parollaDark:{
            type: 'ParollaDark',
            sidebarBg: "#2f3136",
            sidebarText: "#ffffff",
            sidebarUnreadText: "#ffffff",
            sidebarTextHoverBg: "#33363c",
            sidebarTextActiveBorder: "#b8b8ff",
            sidebarTextActiveColor: "#ffffff",
            sidebarTeamBarBg: "#1f2023",
            sidebarHeaderBg: "#27292c",
            sidebarHeaderTextColor: "#ffffff",
            onlineIndicator: "#43b581",
            awayIndicator: "#faa61a",
            dndIndicator: "#f04747",
            mentionBg: "#6e84d2",
            mentionColor: "#ffffff",
            centerChannelBg: "#36393f",
            centerChannelColor: "#dddddd",
            newMessageSeparator: "#6e84d2",
            linkColor: "#2095e8",
            buttonBg: "#b8b8ff",
            buttonColor: "#ffffff",
            errorTextColor: "#ff6461",
            mentionHighlightBg: "#3d414f",
            mentionHighlightLink: "#6e84d2",
            codeTheme: "github"
        },
        denim: {
            type: 'Denim',
            sidebarBg: '#1e325c',
            sidebarText: '#ffffff',
            sidebarUnreadText: '#ffffff',
            sidebarTextHoverBg: '#28427b',
            sidebarTextActiveBorder: '#5d89ea',
            sidebarTextActiveColor: '#ffffff',
            sidebarHeaderBg: '#192a4d',
            sidebarHeaderTextColor: '#ffffff',
            sidebarTeamBarBg: '#162545',
            onlineIndicator: '#3db887',
            awayIndicator: '#ffbc1f',
            dndIndicator: '#d24b4e',
            mentionBg: '#ffffff',
            mentionColor: '#1e325c',
            centerChannelBg: '#ffffff',
            centerChannelColor: '#3f4350',
            newMessageSeparator: '#cc8f00',
            linkColor: '#386fe5',
            buttonBg: '#1c58d9',
            buttonColor: '#ffffff',
            errorTextColor: '#d24b4e',
            mentionHighlightBg: '#ffd470',
            mentionHighlightLink: '#1b1d22',
            codeTheme: 'github',
        },
        sapphire: {
            type: 'Sapphire',
            sidebarBg: '#1543a3',
            sidebarText: '#ffffff',
            sidebarUnreadText: '#ffffff',
            sidebarTextHoverBg: '#2a58ba',
            sidebarTextActiveBorder: '#57b5f0',
            sidebarTextActiveColor: '#ffffff',
            sidebarHeaderBg: '#123b91',
            sidebarHeaderTextColor: '#ffffff',
            sidebarTeamBarBg: '#123582',
            onlineIndicator: '#3db887',
            awayIndicator: '#ffbc1f',
            dndIndicator: '#d24b4e',
            mentionBg: '#ffffff',
            mentionColor: '#174ab5',
            centerChannelBg: '#ffffff',
            centerChannelColor: '#3f4350',
            newMessageSeparator: '#15b7b7',
            linkColor: '#1c58d9',
            buttonBg: '#1c58d9',
            buttonColor: '#ffffff',
            errorTextColor: '#d24b4e',
            mentionHighlightBg: '#7ff0f0',
            mentionHighlightLink: '#0d6e6e',
            codeTheme: 'github',
        },
        quartz: {
            type: 'Quartz',
            sidebarBg: '#f4f4f6',
            sidebarText: '#1f2228',
            sidebarUnreadText: '#1f2228',
            sidebarTextHoverBg: '#e8eaed',
            sidebarTextActiveBorder: '#32a4ec',
            sidebarTextActiveColor: '#1f2228',
            sidebarHeaderBg: '#ebecef',
            sidebarHeaderTextColor: '#1f2228',
            sidebarTeamBarBg: '#e5e7eb',
            onlineIndicator: '#3db887',
            awayIndicator: '#f5ab07',
            dndIndicator: '#d24b4e',
            mentionBg: '#1c58d9',
            mentionColor: '#ffffff',
            centerChannelBg: '#ffffff',
            centerChannelColor: '#3f4350',
            newMessageSeparator: '#15b7b7',
            linkColor: '#1c58d9',
            buttonBg: '#1c58d9',
            buttonColor: '#ffffff',
            errorTextColor: '#d24b4e',
            mentionHighlightBg: '#7ff0f0',
            mentionHighlightLink: '#0d6e6e',
            codeTheme: 'github',
        },
        indigo: {
            type: 'Indigo',
            sidebarBg: '#151e32',
            sidebarText: '#ffffff',
            sidebarUnreadText: '#ffffff',
            sidebarTextHoverBg: '#222c3f',
            sidebarTextActiveBorder: '#4a7ce8',
            sidebarTextActiveColor: '#ffffff',
            sidebarHeaderBg: '#182339',
            sidebarHeaderTextColor: '#ffffff',
            sidebarTeamBarBg: '#1c2740',
            onlineIndicator: '#3db887',
            awayIndicator: '#f5ab00',
            dndIndicator: '#d24b4e',
            mentionBg: '#4a7ce8',
            mentionColor: '#ffffff',
            centerChannelBg: '#111827',
            centerChannelColor: '#dddfe4',
            newMessageSeparator: '#81a3ef',
            linkColor: '#5d89ea',
            buttonBg: '#4a7ce8',
            buttonColor: '#ffffff',
            errorTextColor: '#d24b4e',
            mentionHighlightBg: '#133a91',
            mentionHighlightLink: '#a4f4f4',
            codeTheme: 'solarized-dark',
        },
        onyx: {
            type: 'Onyx',
            sidebarBg: '#202228',
            sidebarText: '#ffffff',
            sidebarUnreadText: '#ffffff',
            sidebarTextHoverBg: '#25262a',
            sidebarTextActiveBorder: '#4a7ce8',
            sidebarTextActiveColor: '#ffffff',
            sidebarHeaderBg: '#24272d',
            sidebarHeaderTextColor: '#ffffff',
            sidebarTeamBarBg: '#292c33',
            onlineIndicator: '#3db887',
            awayIndicator: '#f5ab00',
            dndIndicator: '#d24b4e',
            mentionBg: '#4b7ce7',
            mentionColor: '#ffffff',
            centerChannelBg: '#191b1f',
            centerChannelColor: '#e3e4e8',
            newMessageSeparator: '#1adbdb',
            linkColor: '#5d89ea',
            buttonBg: '#4a7ce8',
            buttonColor: '#ffffff',
            errorTextColor: '#da6c6e',
            mentionHighlightBg: '#0d6e6e',
            mentionHighlightLink: '#a4f4f4',
            codeTheme: 'monokai',
        },
    } as Record<ThemeKey, Theme>,
};

export default Preferences;
