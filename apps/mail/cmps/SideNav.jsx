const { Route, Link } = ReactRouterDOM

import { SideNavList } from './SideNavList.jsx'
import { Loader } from '../../../cmps/Loader.jsx'
import { LabelAdd } from './LabelAdd.jsx'

export class SideNav extends React.Component {
<<<<<<< HEAD
    
=======
    state = {
        activeLabel: 'All'
    }

    setActiveLabel = (activeLabel) => {
        this.setState({ activeLabel })
    }

>>>>>>> 759247d9838eb6aa6e651ebd2d02b74192cc744a
    render() {
        const { labels, onLabelSelect, onAddLabel, onCloseModal } = this.props
        const { activeLabel } = this.state
        if (!labels) <Loader />
        return (
            <div className='side-nav'>
                <h4 className='labels-title'>Labels:</h4>
                <SideNavList labels={labels} onLabelSelect={onLabelSelect} activeLabel={activeLabel} setActiveLabel={this.setActiveLabel} />
                <Route component={() => <LabelAdd onAddLabel={onAddLabel} onCloseModal={onCloseModal} />} path='/mail/label/add-label' />
                <Link to='/mail/label/add-label' className="add-label-btn decoration-none">Add label</Link>
            </div>
        )
    }
}