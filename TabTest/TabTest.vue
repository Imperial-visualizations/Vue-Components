<template>
    <div>
    <iv-tabs>
        <iv-tab tabName="Tab 1" :selected="true">
            <h1>Display Content 1</h1>
            <iv-tabs>
                <iv-tab tabName="Sub Tab 1">
                    <p>Sub Tab Content 1</p>
                </iv-tab>
                <iv-tab tabName="Sub Tab 2">
                    <p>Sub Tab Content 2</p>
                </iv-tab>
                <iv-tab tabName="Sub Tab 3">
                    <p>Sub Tab Content 3</p>
                </iv-tab>
            </iv-tabs>
        </iv-tab>
        <iv-tab tabName="Tab 2">
            <h1>Display Content 2</h1>
        </iv-tab>
        <iv-tab tabName="Tab 3">
            <h1>Display Content 3</h1>
        </iv-tab>
    </iv-tabs>
    </div>
</template>

<script>

export default {
  name: 'App'
}
</script>
