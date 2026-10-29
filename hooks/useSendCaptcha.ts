import { useId } from "react"

import { createUseMutation } from "@1adybug/tanstack-query"
import { toast } from "sonner"

import { sendCaptcha } from "@/apis/sendCaptcha"

export const useSendCaptcha = createUseMutation(() => {
    const key = useId()

    return {
        mutationFn: sendCaptcha,
        onSuccess(data) {
            toast.success(`验证码已发送至 ${data.phone}`, { id: key })
        },
        onError() {
            toast.dismiss(key)
        },
    }
})
