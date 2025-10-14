import { useEffect } from "preact/hooks";
import { Alert, NotificationTypes } from "./alert-item";

import "./alerts-list.css"

export interface AlertType {
    id: number,
    type: NotificationTypes,
    header: string,
    message: string,
}

export function AlertList(model) {

    return (
        <div className="alert-list w-full">
            {model.map((alert: AlertType, index: number) => (
                <Alert type={alert.type} header={alert.header} message={alert.message} key={alert.id} />
            ))}
        </div>
    );
}