export interface TimelineEntry {
  date: string // ISO 8601 format
  title: string // short title
  description: string // rich paragraph
  icon: string // emoji or Tailwind-compatible Lucide icon name
  color: string // Tailwind color class
}

export const timelineData: TimelineEntry[] = [
  {
    date: "1990-06-15",
    title: "Thành lập Viện Đào tạo mở rộng",
    description:
      "Viện Đào tạo mở rộng được thành lập, đánh dấu bước khởi đầu của OU Vietnam trong hành trình giáo dục đại học. Đây là nền tảng đầu tiên cho sự phát triển của trường trong những năm sau.",
    icon: "GraduationCap",
    color: "bg-blue-600",
  },
  {
    date: "1993-07-26",
    title: "Thành lập Đại học Mở bán công TP.HCM",
    description:
      "Đại học Mở bán công TP.HCM chính thức được thành lập, mở ra một chương mới trong lịch sử phát triển của OU Vietnam. Trường bắt đầu mở rộng quy mô và phát triển các chương trình đào tạo đa dạng.",
    icon: "Building",
    color: "bg-emerald-500",
  },
  {
    date: "2006-06-22",
    title: "Chuyển thành Trường Đại học Mở TP.HCM",
    description:
      "Trường chuyển đổi mô hình thành Trường Đại học Mở TP.HCM, đánh dấu bước ngoặt quan trọng trong quá trình phát triển của OU Vietnam. Sự kiện này mở ra cơ hội mới cho trường trong việc nâng cao chất lượng đào tạo.",
    icon: "ScrollText",
    color: "bg-indigo-500",
  },
  {
    date: "2015-06-12",
    title: "Phê duyệt Đề án đổi mới cơ chế hoạt động",
    description:
      "Đề án đổi mới cơ chế hoạt động được phê duyệt, tạo điều kiện cho OU Vietnam phát triển mạnh mẽ hơn trong giai đoạn mới. Trường bắt đầu áp dụng những phương pháp quản lý hiện đại và đổi mới phương thức đào tạo.",
    icon: "Settings",
    color: "bg-amber-500",
  },
  {
    date: "2020-06-15",
    title: "Kỷ niệm 30 năm thành lập",
    description:
      "OU Vietnam kỷ niệm 30 năm thành lập, nhìn lại chặng đường phát triển và những thành tựu đã đạt được trong ba thập kỷ. Đây là dịp để trường tổng kết những thành tựu đã đạt được và định hướng phát triển trong tương lai.",
    icon: "PartyPopper",
    color: "bg-pink-500",
  },
  {
    date: "2025-04-13",
    title: "Kiểm định chất lượng theo tiêu chuẩn FIBAA",
    description:
      "OU Vietnam hoàn thành kiểm định chất lượng theo tiêu chuẩn FIBAA, khẳng định vị thế và chất lượng đào tạo đạt chuẩn quốc tế. Đây là minh chứng cho nỗ lực không ngừng của trường trong việc nâng cao chất lượng giáo dục.",
    icon: "CheckCircle",
    color: "bg-sky-500",
  },
  {
    date: "2025-06-15",
    title: "Dự kiến kỷ niệm 35 năm",
    description:
      "OU Vietnam dự kiến tổ chức kỷ niệm 35 năm thành lập, đánh dấu một cột mốc quan trọng trong lịch sử phát triển của trường. Sự kiện này sẽ là dịp để trường khẳng định vị thế và vai trò của mình trong hệ thống giáo dục đại học Việt Nam.",
    icon: "CalendarDays",
    color: "bg-teal-500",
  },
]

// Group timeline entries by decade
export const getTimelineByDecade = () => {
  const decades: Record<string, TimelineEntry[]> = {}

  timelineData.forEach((entry) => {
    const year = entry.date.substring(0, 4)
    const decade = `${year.substring(0, 3)}0s`

    if (!decades[decade]) {
      decades[decade] = []
    }

    decades[decade].push(entry)
  })

  return Object.entries(decades).map(([decade, entries]) => ({
    decade,
    entries,
  }))
}
