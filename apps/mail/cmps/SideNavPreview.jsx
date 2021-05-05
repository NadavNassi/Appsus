

export function SideNavPreview({ label, onLabelSelect }) {
    return (
        <li onClick={() => onLabelSelect(label)} className={label}>{label}</li>
    )
}