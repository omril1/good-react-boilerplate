import * as React from 'react';
import * as style from './style.scss';

type <%=capitalizedName%>Props = {};

export class <%=capitalizedName%> extends React.Component<<%=capitalizedName%>Props, {}> {
  render() {
    return (
      <div className={style.<%=capitalizedName%>}><%=capitalizedName%></div>
    )
  }
}