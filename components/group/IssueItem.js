import React from 'react'

import Link from 'next/link'
import {
  monospacedFontFamily,
  borderColor,
  grayColor
} from '../../lib/styles/variables'
import moment from 'moment'

const IssueItem = ({ issue, group }) => (
  <li
    key={issue._id}
  >
    <h3>
      <Link
        href={{
          pathname: '/issue',
          query: {
            groupUniqueName: group.uniqueName,
            issueNumber: issue.number
          }
        }}
        as={`/g/${group.uniqueName}/${issue.number}`}
      >
        <a>
          <span className='issueNumber'>#{issue.number}</span>
          {issue.title}<code className='summary'>{issue.summary}</code></a>
      </Link>
    </h3>
    <div className='meta'>
      <div className='writer'>
        by
        <img
          className='photo'
          src={issue.writer.photos[0].value}
        />&nbsp;
        {issue.writer.githubName} {moment(issue.createdAt).fromNow()}
      </div>
    </div>
    <style jsx>{`
      li {
          border-bottom: 1px solid ${borderColor};
          padding: 0 15px 5px;
          .meta {
            color: ${grayColor};
            font-family: ${monospacedFontFamily};
            font-size: 0.8em;
            .writer {
              line-height: 20px;
              .photo {
                width: 20px;
                height: 20px;
                border-radius: 10px;
                vertical-align: middle;
              }
            }
          }

          h3 {
            font-size: 18px;
            margin: 0;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            color: ${grayColor};
            .issueNumber {
              font-size: 0.66em;
              margin-right: 5px;
            }
            .summary {
              vertical-align: middle;
              margin-left: 15px;
              color: ${grayColor};
            }
            li:last-child {
              border-bottom: none;
            }
    `}</style>
  </li>
)

export default IssueItem
