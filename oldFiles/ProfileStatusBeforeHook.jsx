import React from "react";
import style from "../ProfileInfo.module.css";
class ProfileStatus extends React.Component {
  state = { editMode: false, status: this.props.status };
  // чтобы не потерялся контекст и не байндить делаем стрелочный метод
  // activateEditMode = () => { }
  // alert("check");
  // this.state.editMode = true; // но тогда здесь он не поймет this  и скажет undefinded
  activateEditMode = () => {
    //this.forceUpdate(); // в крайнем случае
    // console.log(this);
    this.setState({ editMode: true });
  };
  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value });
  };
  componentDidUpdate(prevProps, prevState) {
    // дает прошлые данные? нужен для синхронизации локального и глобального стейта
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }
  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            {/* <span onDoubleClick={this.activateEditMode.bind(this)}> */}
            <span
              onDoubleClick={this.activateEditMode}
              className={style.status}
            >
              {this.props.status || "---------"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onBlur={this.deactivateEditMode}
              //   onBlur={this.deactivateEditMode.bind(this)}
              className={style.status}
              value={this.state.status}
              autoFocus={true}
              onChange={this.onStatusChange}
            ></input>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
