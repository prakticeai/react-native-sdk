import React, { Component } from 'react';
import { Text, View, StyleSheet, WebView } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
    onNavigationStateChange = navState => {
        if (navState.url.indexOf('https://www.google.com') === 0) {
            const regex = /#access_token=(.+)/;
            let accessToken = navState.url.match(regex)[1];
            console.log(accessToken);
        }
    };
    render() {
        // const url = 'https://www.google.com';
        const url = 'https://apollo.praktice.org/?pk_context=apLZoMhmnF8S&session_data=channel!android';
        return (
            <WebView
                source={{
                    uri: url,
                }}
                onNavigationStateChange={this.onNavigationStateChange}
                startInLoadingState
                scalesPageToFit
                javaScriptEnabled
                style={{ flex: 1, marginTop: 23 }}
            />
        );
    }
}
