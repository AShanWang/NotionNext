import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div
      className={`gap-x-1 flex flex-wrap text-sm font-serif ${props.className || ''}`}>
      <span>➤ </span>
      <a
        href='https://jyjc.cloudns.org'
        className='underline justify-start'>
        用心做好每一期教程！
      </a>
      .
    </div>
  )
}
