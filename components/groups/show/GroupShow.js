import React from 'react'
import GroupAside from './GroupAside'
import IssueList from './IssueList'
import socket from '../../../lib/socket'

class GroupShow extends React.PureComponent {
  componentDidMount () {
    const {
      group
    } = this.props

    socket.emit('join:group', {
      groupId: group._id
    })
    socket.on('groupRole:update', this.onGroupRoleUpdate)
    socket.on('groupRole:destroy', this.onGroupRoleDestroy)
  }

  componentWillUnmount () {
    const {
      group
    } = this.props

    socket.emit('leave:group', {
      groupId: group._id
    })
    socket.off('groupRole:update', this.onGroupRoleUpdate)
    socket.off('groupRole:destroy', this.onGroupRoleDestroy)
  }

  onGroupRoleUpdate = role => {
    this.props.actions.updateGroupRole(role)
  }

  onGroupRoleDestroy = role => {
    this.props.actions.destroyGroupRole(role)
  }

  render () {
    const {
      group,
      issues,
      isJoiningOrLeaving,
      actions,
      globalActions,
      user
    } = this.props

    return (
      <div>
        <div className='row'>
          <div className='col-xs-12 col-sm-3 col-sm-offset-1 col-md-2 col-md-offset-2'>
            <GroupAside
              group={group}
              user={user}
              actions={actions}
              isJoiningOrLeaving={isJoiningOrLeaving}
              globalActions={globalActions}
            />
          </div>
          <div className='col-xs-12 col-sm-7 col-md-6'>
            <IssueList
              issues={issues}
              group={group}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default GroupShow
