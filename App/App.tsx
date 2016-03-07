import * as React from "react";
import ContentPage from "./Components/ContentPage/ContentPage";
import CommonActionCreators from "./ActionCreators/CommonActionCreators";
require("./Log/ActionLogger");

export default class App extends React.Component<{}, {}> {
    render(): React.ReactElement<{}> {
        return  <div>test
                    <ContentPage />
                </div>;
    }

    componentDidMount(): void {
        CommonActionCreators.loadApp();
    }
};