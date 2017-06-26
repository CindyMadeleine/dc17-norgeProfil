import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import {List, ListItem} from 'material-ui/List';
import {Card} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import {grey400, darkBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Example from 'material-ui/svg-icons/action/account-circle'

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 10,
    },
};

class Feed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.setState({
            slideIndex: value,
        });
    };

    render() {
        const iconButtonElement = (
            <IconButton
                touch={true}
                tooltip="Mer"
                tooltipPosition="bottom-left"
            >
                <MoreVertIcon color={grey400} />
            </IconButton>
        );

        const rightIconMenu = (
            <IconMenu iconButtonElement={iconButtonElement}>
                <MenuItem>Rapporter</MenuItem>
            </IconMenu>
        );

        const yourActivityList = (
            <List>
                <ListItem
                    leftAvatar={<img src="img/bankid.png" width={52}/>}
                    rightIconButton={rightIconMenu}
                    primaryText="BankID"
                    disabled={true}
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>Danske Bank</span><br />
                            16 Juni 2017 14:32
                        </p>
                    }
                    secondaryTextLines={2}
                />
                <Divider inset={true} />
                <ListItem
                    leftAvatar={<img src="img/minid.png" width={52}/>}
                    rightIconButton={rightIconMenu}
                    primaryText="MinID"
                    disabled={true}
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>Skattetaten</span><br />
                            18 Juli 2017 22:13
                        </p>
                    }
                    secondaryTextLines={2}
                />
                <Divider inset={true} />
            </List>
        );

        const publicSectorsActivityList = (
            <List>
                <ListItem
                    leftAvatar={<Example/>}
                    rightIconButton={rightIconMenu}
                    primaryText="Colosseum Tannlege"
                    disabled={true}
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>Mobilnummer</span><br />
                        </p>
                    }
                    secondaryTextLines={2}
                />
                <Divider inset={true} />
                <ListItem
                    leftAvatar={<Example/>}
                    rightIconButton={rightIconMenu}
                    primaryText="Skatteetaten"
                    disabled={true}
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>E-mail</span><br />
                        </p>
                    }
                    secondaryTextLines={2}
                />
                <Divider inset={true} />
            </List>
        );

        return (
            <Card className="Feed">
                <Tabs
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                >
                    <Tab label="Din aktivitet" value={0}/>
                    <Tab label="Offentlig sektors aktivitet" value={1}/>
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                    <div>
                        {yourActivityList}
                    </div>
                    <div style={styles.slide}>
                        {publicSectorsActivityList}
                    </div>
                </SwipeableViews>
            </Card>
        );
    }
}

module.exports = Feed;