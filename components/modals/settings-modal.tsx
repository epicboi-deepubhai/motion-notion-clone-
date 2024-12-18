"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { useSettings } from "@/hooks/use-settings";
import { ModeToggle } from "../mode-toggle";

const SettingsModal = () => {
    const settings = useSettings();
    return ( 
        <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
            <DialogContent>
                <DialogHeader className="border-b pb-3">
                    <h2 className="text-lg font-medium">
                        My Settings
                    </h2>
                </DialogHeader>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-y-1">
                        <Label>
                            Appearence
                        </Label>
                        <span className="text-[0.8rem] text-muted-foreground">
                            Customize how Motion looks on your device
                        </span>
                    </div>
                    <ModeToggle></ModeToggle>
                </div>
            </DialogContent>
        </Dialog>
     );
}
 
export default SettingsModal;