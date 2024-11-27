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
      // <span>Powered by</span>
      <a
        href='https://jyjc.cloudns.org'
        // href='https://github.com/tangly1024/NotionNext'
        className='underline justify-start'>
        用心做好每一期教程！
        // NotionNext {siteConfig('VERSION')}
      </a>
      .
    </div>
  )
}
