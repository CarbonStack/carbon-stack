const { Rendezvous, Issue, IssueCommit } = require('../../../lib/db/models')
const { NotFound } = require('../../../lib/errors')

async function issueRoute (req, res, next) {
  const rv = await Rendezvous
    .findOne({
      uniqueName: req.params.rvUniqueName
    })
  if (rv == null) throw new NotFound()

  const issue = await Issue
    .findOne({
      rv: rv._id,
      number: req.params.issueNumber
    })
  if (issue == null) throw new NotFound()

  const latestCommit = await IssueCommit
    .findById(issue.latestCommit)

  res.json({
    issue,
    latestCommit
  })
}

module.exports = issueRoute
