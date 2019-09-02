export interface imagenInterface{
    data: {
      id: string,
      url_viewer: string,
      url: string,
      display_url: string,
      title: string,
      time: string,
      image: {
        filename: string,
        name: string,
        mime: string,
        extension: string,
        url: string,
        size: number
      },
      thumb: {
        filename: string,
        name: string,
        mime: string,
        extension: string,
        url: string,
        size: string
      },
      medium: {
        filename: string,
        name: string,
        mime: string,
        extension: string,
        url: string,
        size: string
      },
      delete_url: string
    },
    success: boolean,
    status: number
  }
