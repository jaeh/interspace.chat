import { openInNewTab } from './openInNewTab.js'

export const poap = space => {
  if (space.indexOf('claim poap token') > -1) {
    window.alert(
      'To claim your POAP token paste your wallet address along with your role(s) at noncon (speaker, organizer, volunteer, attendee) in the #claim-poap-token discord channel and you will receive a PM with a link to redeem.',
    )
  } else {
    window.alert(
      'To claim your POAP token paste your wallet address along with your role(s) at noncon (speaker, organizer, volunteer, attendee) in the #claim-poap-token discord channel and you will receive a PM with a link to redeem.',
    )
    openInNewTab('https://discord.gg/pyJMZG5')
  }
}
