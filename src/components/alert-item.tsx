import { useEffect } from "preact/hooks";

import "./alert-item.css"

export enum NotificationTypes {
    Error = "Error",
    Success = "Success",
    Info = "Info",
    Warning = "Warning",
};

export const deafultNotificationSetup = {
    error: {
        color: "#F44336", icon: (<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        ),
    },
    info: {
        color: "#9C27B0", icon: (<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        ),
    },
    success: {
        color: "#4CAF50", icon: (<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        ),
    },
    warning: {
        color: "#FDD835", icon: (<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>),
    }
};

const renderNotificationItem = (type: NotificationTypes, header: string, message: string) => {
    switch (type) {
        case NotificationTypes.Error:
            return (
                <div className="alert-item error">
                    <h4>{header}</h4>
                    <p>{message}</p>
                </div>
            );
        case NotificationTypes.Success:
            return (
                <div className="alert success">
                    <h4>{header}</h4>
                    <p>{message}</p>
                </div>
            );
        case NotificationTypes.Warning:
            return (
                <div className="alert warning">
                    <h4>{header}</h4>
                    <p>{message}</p>
                </div>
            );
        case NotificationTypes.Info:
            return (
                <div className="alert info">
                    <h4>{header}</h4>
                    <p>{message}</p>
                </div>
            );
        default:
            return (
                <div className="alert deafault-alert">
                    <h4>Укажи тип</h4>
                </div>
            );
    }
};

export function Alert({ type, header, message }) {
    return (
        <div className="alert-item-container w-full">
            {renderNotificationItem(type, header, message)}
        </div>
    );
}