import { Moon, Sun, Palette, X } from "lucide-react";
import style from "./style.module.css";
import { useEffect, useState } from "react";

export default function Option() {

    const [dark, setDark] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const [colors, setColors] = useState({
        bgWhite: "",
        txtMain: "",
        txtDesc: "",
        buttons: "",
        border: "",
        footer: "",
        icon: ""
    });

    function changeColor(variable, value, key) {
        document.documentElement.style.setProperty(variable, value);

        setColors((prev) => ({
            ...prev,
            [key]: value
        }));
    }

    useEffect(() => {
        const styles = getComputedStyle(document.documentElement);

        setColors({
            bgWhite: styles.getPropertyValue("--bg-white").trim(),
            txtMain: styles.getPropertyValue("--txt-black-main").trim(),
            txtDesc: styles.getPropertyValue("--txt-desc").trim(),
            buttons: styles.getPropertyValue("--color-gray").trim(),
            border: styles.getPropertyValue("--border-b-sec").trim(),
            footer: styles.getPropertyValue("--bg-footer").trim(),
            icon: styles.getPropertyValue("--icon-color").trim()
        });
    }, []);

    useEffect(() => {
        const root = document.documentElement;

        if (dark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [dark]);

    function isLightColor(hex) {
        if (!hex) return false;

        hex = hex.replace("#", "");

        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        const brightness = (r * 299 + g * 587 + b * 114) / 1000;

        return brightness > 155;
    }

    const colorOptions = [
        { key: "txtMain", value: colors.txtMain, label: "primary text", variable: "--txt-black-main" },
        { key: "txtDesc", value: colors.txtDesc, label: "secondary text", variable: "--txt-desc" },
        { key: "buttons", value: colors.buttons, label: "buttons", variable: "--color-gray" },
        { key: "border", value: colors.border, label: "border / line", variable: "--border-b-sec" },
        { key: "footer", value: colors.footer, label: "back footer", variable: "--bg-footer" },
        { key: "icon", value: colors.icon, label: "icons", variable: "--icon-color" },
        { key: "bgWhite", value: colors.bgWhite, label: "background", variable: "--bg-white" },
    ];

    return (
        <>
            <button 
                className={style.mobileFab} 
                onClick={() => setMobileOpen(true)}
                aria-label="Open color options"
            >
                <Palette />
            </button>

            <div className={`${style.mobileOverlay} ${mobileOpen ? style.open : ''}`}>
                <div className={style.mobilePanel}>
                    <div className={style.mobileHeader}>
                        <h3>Color Options</h3>
                        <button className={style.closeBtn} onClick={() => setMobileOpen(false)}>
                            <X />
                        </button>
                    </div>

                    <div className={style.mobileOptions}>
                        {colorOptions.map((option) => (
                            <div
                                key={option.key}
                                className={style.mobileColorBox}
                                style={{ background: option.value }}
                            >
                                <label style={{ color: isLightColor(option.value) ? "#000" : "#fff" }}>
                                    {option.label}
                                </label>
                                <input
                                    type="color"
                                    value={option.value}
                                    onChange={(e) =>
                                        changeColor(option.variable, e.target.value, option.key)
                                    }
                                />
                            </div>
                        ))}
                    </div>

                    <button 
                        className={style.darkModeBtn} 
                        onClick={() => setDark(!dark)}
                    >
                        {dark ? <Sun /> : <Moon />}
                        <span>{dark ? "Light Mode" : "Dark Mode"}</span>
                    </button>
                </div>
            </div>

            <div className={style.space}>

                <div className={style.container}>

                    <div
                        className={style.colorbox}
                        style={{ background: colors.txtMain }}
                    >
                        <label style={{ color: isLightColor(colors.txtMain) ? "#000" : "#fff" }}>
                            primary text
                        </label>

                        <input
                            type="color"
                            value={colors.txtMain}
                            onChange={(e) =>
                                changeColor("--txt-black-main", e.target.value, "txtMain")
                            }
                        />
                    </div>

                    <div
                        className={style.colorbox}
                        style={{ background: colors.txtDesc }}
                    >
                        <label style={{ color: isLightColor(colors.txtDesc) ? "#000" : "#fff" }}>
                            secondary text
                        </label>

                        <input
                            type="color"
                            value={colors.txtDesc}
                            onChange={(e) =>
                                changeColor("--txt-desc", e.target.value, "txtDesc")
                            }
                        />
                    </div>

                    <div
                        className={style.colorbox}
                        style={{ background: colors.buttons }}
                    >
                        <label style={{ color: isLightColor(colors.buttons) ? "#000" : "#fff" }}>
                            buttons
                        </label>

                        <input
                            type="color"
                            value={colors.buttons}
                            onChange={(e) =>
                                changeColor("--color-gray", e.target.value, "buttons")
                            }
                        />
                    </div>

                    <div
                        className={style.colorbox}
                        style={{ background: colors.border }}
                    >
                        <label style={{ color: isLightColor(colors.border) ? "#000" : "#fff" }}>
                            border / line
                        </label>

                        <input
                            type="color"
                            value={colors.border}
                            onChange={(e) =>
                                changeColor("--border-b-sec", e.target.value, "border")
                            }
                        />
                    </div>

                    <div
                        className={style.colorbox}
                        style={{ background: colors.footer }}
                    >
                        <label style={{ color: isLightColor(colors.footer) ? "#000" : "#fff" }}>
                            back footer
                        </label>

                        <input
                            type="color"
                            value={colors.footer}
                            onChange={(e) =>
                                changeColor("--bg-footer", e.target.value, "footer")
                            }
                        />
                    </div>

                    <div
                        className={style.colorbox}
                        style={{ background: colors.icon }}
                    >
                        <label style={{ color: isLightColor(colors.icon) ? "#000" : "#fff" }}>
                            icons
                        </label>

                        <input
                            type="color"
                            value={colors.icon}
                            onChange={(e) =>
                                changeColor("--icon-color", e.target.value, "icon")
                            }
                        />
                    </div>

                    <div
                        className={style.colorbox}
                        style={{ background: colors.bgWhite }}
                    >
                        <label style={{ color: isLightColor(colors.bgWhite) ? "#000" : "#fff" }}>
                            background
                        </label>

                        <input
                            type="color"
                            value={colors.bgWhite}
                            onChange={(e) =>
                                changeColor("--bg-white", e.target.value, "bgWhite")
                            }
                        />
                    </div>

                    <div className={style.darkbox}>
                        {dark ? (
                            <Sun onClick={() => setDark(false)} />
                        ) : (
                            <Moon onClick={() => setDark(true)} />
                        )}
                    </div>

                </div>

            </div>
        </>
    );
}