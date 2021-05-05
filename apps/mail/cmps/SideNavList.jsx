import { SideNavPreview } from './SideNavPreview.jsx'


export function SideNavList({ labels, onLabelSelect }) {
    return (
        <ul className="side-nav-list clean-list">
            {labels.map(label => <SideNavPreview key={label} label={label} onLabelSelect={onLabelSelect} />)}
        </ul>
    )
}